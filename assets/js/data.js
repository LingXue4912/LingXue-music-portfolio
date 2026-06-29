/* ===================================================================
 *  全站内容数据  ——  你平时只需要改这个文件
 * ===================================================================*/
window.SITE_DATA = {

  /* ---------- 1. 个人信息 ---------- */
  profile: {
    name: "凌雪",
    //pinyin: "YUE ZI XI",
    //tagline: "全平台 id：月紫夕YUEZIXI",
    avatar: "assets/img/TouXiang.jpg",          // 头像图：assets/img/avatar.jpg
    qqQr: "assets/img/qq-qr.jpg",             // QQ 二维码：保持原图，不做滤镜，确保可扫描
    bilibiliQr: "assets/img/bilibili-qr.jpg",
    bio: "工种作编曲，擅长风格：古风/现风/电子。",
    // "open"=接新中  "limited"=少量名额  "closed"=暂停接单
    commissionStatus: "open",
    roles: ["作曲", "编曲"],

    // 音乐平台主页（显示在「接新」状态下方，点击新标签页跳转）
    platforms: [
      { icon: "B", label: "哔哩哔哩 · 主页",   url: "https://space.bilibili.com/1921164220",         color: "white" }
    ],

    // 联系方式（换成你自己的；留空的自动隐藏）
    contacts: {
      qq: "1404192084"
    }
  },

  /* ---------- 2. 分类标签体系（作品筛选用） ---------- */
  taxonomy: {
    roles:  ["作曲", "编曲", "配乐"],
    genres: ["现风", "古风", "电子"],
    moods:  []
  },

  /* ---------- 3. 作品集 ---------- */
  // 播放：填了 netease(歌曲ID) / bilibili(BV号) 就会出现对应播放器；
  // 两个都填 → 默认网易云 + 可一键切到 B站视频。链接留空 = 显示「链接待补充」。
  works: [
    {
      title: "再越千山",
      roles: ["编曲"],
      genres: ["古风"],
      netease: "3376680349",
      bilibili: "BV1NN9YBqEDL",            // ← B站视频 BV 号填这里，填了会出现「网易云/B站」切换
      coverPos: "center 44%",  // 让《再越千山》题字主体完整居中
      vocal: "裂天/小坠/小曲儿/少年霜",
    },
    {
      title: "于山",
      roles: ["编曲"],
      genres: ["古风"],
      netease: "2723680037",
      bilibili: "BV16G3kzeEQk",
      coverPos: "center 38%",
      vocal: "兰音Reine",
    },
    {
      title: "远山衔落日",
      roles: ["编曲"],
      genres: ["古风"],
      netease: "2714946039",
      bilibili: "BV15vMNzVEgf",
      coverPos: "center 40%",
      vocal: "南风ZJN/南偿",
    },
    {
      title: "诸道传薪",
      roles: ["编曲"],
      genres: ["古风"],
      netease: "2619482881",
      bilibili: "BV17x4y1s7jV",
      vocal: "星尘Infinity/赤羽/苍穹",
    },
    {
      title: "何处望神州",
      roles: ["编曲"],
      genres: ["古风"],
      netease: "2665218392",
      bilibili: "BV1pYcWeaESc",
      vocal: "星尘Infinity",
    },
    {
      title: "破棘 Thorn-Break",
      roles: ["编曲"],
      genres: ["电子"],
      netease: "2749886414",
      bilibili: "BV1Kdn7zhEJo",
      vocal: "白冰堂",
    },
    {
      title: "昨夜星辰今日风",
      roles: ["作曲", "编曲"],
      genres: ["现风", "电子"],
      netease: "3337619764",
      bilibili: "BV1JPqcBFE2B",
      vocal: "星尘Infinity",
    },
    {
      title: "入江海",
      roles: ["作曲"],
      genres: ["古风"],
      netease: "3364231214",
      bilibili: "BV16eXGBAEE7",
      vocal: "榆溪/聆舟",
    },
    {
      title: "新岁长欢",
      roles: ["作曲"],
      genres: ["古风"],
      netease: "3355545732",
      bilibili: "",
      vocal: "云三/师承章/包叽/剑灵/正版Devil",
    },
    {
      title: "向星引力",
      roles: ["作曲", "编曲"],
      genres: ["现风"],
      netease: "3387336091",
      bilibili: "",
      vocal: "Hazzel烤梨染",
    },
    {
      title: "如生",
      roles: ["编曲"],
      genres: ["古风"],
      netease: "3324531674",
      bilibili: "",
      vocal: "黑旋风李葵",
    },
    {
      title: "殿上欢-战斗主题音乐",
      roles: ["配乐"],
      genres: ["古风"],
      netease: "3372338629",
      bilibili: "",
      vocal: "",
    },
    {
      title: "殿上欢-悬疑主题音乐",
      roles: ["配乐"],
      genres: ["古风"],
      netease: "3372339865",
      bilibili: "",
      vocal: "",
    }
  ],

  /* ---------- 4. 接新详情 / 报价 ---------- */
  priceGroups: [
    {
      category: "作曲", pinyin: "Composition",
      groups: [
        {
          label: "承接项目（非商）",
          note: "请提供：歌词文件、对标歌曲。",
          items: [
            { name: "作曲", price: "¥200", desc: "" },
            { name: "填曲", price: "¥120", desc: "" }
          ],
          afterNote: "交付：作曲 midi 文件 + 和弦 + 虚拟歌姬 demo 干音。工期：1~14 天。"
        }
      ]
    },

    {
      category: "编曲", pinyin: "Arrangement",
      groups: [
        {
          label: "非商定制",
          note: "请提供：作曲 midi 文件（告知曲速和调性）、歌词文件、对标歌曲，以及对编曲的其他要求，包括但不限于风格倾向、段落时长、情绪起伏；可以具体到某个段落想要什么乐器。",
          items: [
            { name: "古风", price: "¥1000~1800", desc: "" },
            { name: "现风", price: "¥800~1200", desc: "" }
          ],
          afterNote: "交付：主旋律 + 伴奏 mp3 文件，纯伴奏 wav 文件（含分轨粗混），分轨 wav 文件（确定分轨混音老师之后，告知分轨要求再导出）。工期：7~30 天。"
        }
      ],
      extra: [
        "关于修改：编曲开工后，转调将收费，第一个半音 40 元，每额外变化一个半音增加 20 元；导出分轨之后不再接受转调，请在编曲开工前确定好调性。",
        "对于已经交付的版本，所有修改意见请一次性列清楚。如果再次交付后提出别的修改意见，将额外收费。",
        "对编曲有任何要求请事先说明清楚；没有明确要求或者描述抽象的地方，我将按照自己的理解制作。如果事后才提要求造成修改，将额外收费。",
        "混音方面：只负责分轨粗混，不额外收费，仅作为后续分轨混音参考使用。如在编曲阶段提出属于分轨混音方面的修改意见，编曲中不作修改，请转告分轨混音老师。",
        "编曲工程永久保留，如有需求可提供走带录屏。",
        "只接定制，一般不制作成品编曲售卖。"
      ]
    },

    {
      category: "其他", pinyin: "Others",
      groups: [
        {
          items: [
            { name: "乐器 / 人声扒 midi", price: "¥50", desc: "" },
            { name: "制作虚拟歌姬 demo", price: "¥30", desc: "" }
          ]
        }
      ]
    }
  ],

  freeNote: {
    title: "商用说明",
    desc: "商用价格另谈，一般情况下商用 = 非商 × 2。"
  },

  /* ---------- 5. 排单 / 接单队列 ---------- */
  queue: []
};
