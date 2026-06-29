import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const dataPath = path.join(root, "assets/js/data.js");
const tracksPath = path.join(root, "assets/js/tracks.js");

const dataText = fs.readFileSync(dataPath, "utf8");
const tracksText = fs.readFileSync(tracksPath, "utf8");

const workIds = Array.from(
  dataText.matchAll(/netease:\s*"(\d+)"/g),
  (match) => match[1],
);

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(tracksText, sandbox);

const tracks = sandbox.window.TRACKS || {};
const missingIds = [...new Set(workIds)].filter((id) => !tracks[id]?.cover);

if (!missingIds.length) {
  console.log("All works already have cover metadata.");
  process.exit(0);
}

const url = `https://music.163.com/api/song/detail/?ids=${encodeURIComponent(
  JSON.stringify(missingIds.map(Number)),
)}`;

const response = await fetch(url, {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36",
    Referer: "https://music.163.com/",
  },
});

if (!response.ok) {
  throw new Error(`NetEase request failed: ${response.status} ${response.statusText}`);
}

const payload = await response.json();
const songs = payload.songs || [];
const byId = new Map(songs.map((song) => [String(song.id), song]));

let updated = 0;
const failed = [];

for (const id of missingIds) {
  const song = byId.get(id);
  const cover = song?.album?.picUrl || song?.al?.picUrl;

  if (!cover) {
    failed.push(id);
    continue;
  }

  tracks[id] = {
    ...(tracks[id] || {}),
    name: tracks[id]?.name || song.name || "",
    cover,
  };
  updated += 1;
}

fs.writeFileSync(
  tracksPath,
  `window.TRACKS = ${JSON.stringify(tracks, null, 2)};\n`,
  "utf8",
);

console.log(`Updated covers: ${updated}`);
if (failed.length) {
  console.log(`No cover returned for: ${failed.join(", ")}`);
}
