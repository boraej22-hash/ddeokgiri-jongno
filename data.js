// 자동 생성 — 고치려면 data/jongno.js, data/jongno-draft.js 를 고친 뒤 다시 만들기
// 떡기리 종로점 상품 정보 (출처: 떡기리 쇼카드-종로점 (2).pdf, 2026-10-22 윈도우 PDF 엔진으로 다시 읽음)
// - id: QR 주소에 들어가는 고정 이름. 가격·설명이 바뀌어도 id는 바꾸지 않는다 (바꾸면 QR을 다시 인쇄해야 함).
// - prices: [["", 7000]] 처럼 [크기 이름, 가격]. 크기 이름이 있으면 쇼카드에 나란히 표시. 가격이 없으면 null → "확인 필요".
// - was: 원래 가격(줄 긋기), unit: "6pcs" 같은 수량 표시.
// - en: PDF 영어. 오류 5건은 2026-10-22 사장님 지시로 고침(docs/1단계-상품표.md "수정한 항목").
// - pack: 포장(사장님 확인). img: 상품 사진(images/ 아래). jongno/ 는 사장님이 준 사진, 나머지 .webp는 홈페이지에서 쓰던 실제 사진(한과세트 사진은 27,000원 가격표가 찍혀 있어 안 씀).
// - check: 사장님 확인이 필요한 내용 (쇼카드에 빨간 표시는 시안에서만).
window.JONGNO = {
  qrBase: "",            // 배포 후 주소를 넣는다. 예: https://○○○.vercel.app/p/
  qrPath: "p/",          // 상품 주소 모양: (주소)/p/(id)
  categories: [
    { id: "injeolmi", ko: "인절미", en: "Injeolmi" },
    { id: "ricecake", ko: "떡류", en: "Rice Cakes" },
    { id: "snack", ko: "전통간식", en: "Traditional Snacks" },
    { id: "gift", ko: "선물세트", en: "Gift Sets" },
    { id: "oil", ko: "참기름·들기름", en: "Sesame & Perilla Oil" },
    { id: "tea", ko: "차", en: "Tea" }
  ],
  items: [
    // ── PDF 1쪽
    { id: "coconut-injeolmi", page: 1, cat: "injeolmi", ko: "코코넛 인절미", en: "Coconut injeolmi", zh: "椰香韩式糯米糕", prices: [["S", 4000], ["M", 6000]] },
    { id: "pumpkin-castella-injeolmi", page: 1, cat: "injeolmi", ko: "단호박 카스테라 인절미", en: "Sweet pumpkin castella injeolmi", zh: "南瓜卡斯特拉韩式糯米糕", prices: [["S", 4000], ["M", 6000]] },
    { id: "mugwort-injeolmi", page: 1, cat: "injeolmi", ko: "쑥 인절미", en: "Mugwort Injeolmi", zh: "艾草韩式糯米糕", prices: [["S", 4000], ["M", 6000]] },
    { id: "black-sesame-injeolmi", page: 1, cat: "injeolmi", ko: "흑임자 인절미", en: "Black sesame injeolmi", img: "injeolmi-heukimja.webp", zh: "黑芝麻韩式糯米糕", prices: [["S", 4000], ["M", 6000]] },
    { id: "sweet-potato-hotteok", page: 1, cat: "snack", ko: "고구마 호떡", en: "Sweet Potato Griddlecake", zh: "红薯韩式糖饼", prices: [["", 7000]] },
    { id: "strawberry-castella-injeolmi", page: 1, cat: "injeolmi", ko: "딸기 카스테라 인절미", en: "Strawberry castella injeolmi", zh: "草莓卡斯特拉韩式糯米糕", prices: [["S", 4000], ["M", 6000]] },
    { id: "nutrition-chalddeok", page: 1, cat: "ricecake", ko: "영양 찰떡", en: "Nutrition Bean Rice Cake", zh: "营养什锦糯米糕", prices: [["S", 4000], ["M", 6000]] },
    { id: "cheese-gotgam-danja", page: 1, cat: "ricecake", ko: "치즈 곶감 단자", en: "Cheese dried persimmon", zh: "芝士柿饼糯米团", prices: [["", 6500]] },
    { id: "mocha-castella-injeolmi", page: 1, cat: "injeolmi", ko: "모카 카스테라 인절미", en: "Mocha castella injeolmi", zh: "摩卡卡斯特拉韩式糯米糕", prices: [["S", 4000], ["M", 6000]] },

    // ── PDF 2쪽 (빈 칸 3개)
    { id: "assorted-garaeddeok", page: 2, cat: "ricecake", ko: "모듬 가래떡", en: "ddeokgiri bar rice cake", img: "garaeddeok.webp", zh: "什锦韩式条糕", prices: [["", 7000]] },
    { id: "walnut-gangjeong", page: 2, cat: "snack", ko: "떡기리 호두 강정", en: "ddeokgiri walnut gangjeong", zh: "糕福来 核桃蜜饯", img: "jongno/walnut-gangjeong.jpg", prices: [["", 10000]], extra: "노리개 포장 시 2,000원 추가 · Extra for Norigae packaging ₩2,000" },
    { id: "cheese-gotgam-6-double", page: 2, cat: "gift", ko: "치즈곶감 6구 더블", en: "Cheese Dried Persimmon 6-piece Double", sub: "dried persimmon 3pcs + Walnut Snack 3pcs", img: "gotgam-gangjeong-6gu.webp", zh: "芝士柿饼 6枚装·双拼", prices: [["", 29000]] },
    { id: "cheese-gotgam-6-special", page: 2, cat: "gift", ko: "치즈곶감 6구 스페셜", en: "Cheese Dried Persimmon 6-Piece Special", sub: "dried persimmon 6pcs", img: "gotgam-6gu.webp", zh: "臻选芝士柿饼 6枚装", prices: [["", 36500]] },
    { id: "cheese-gotgam-10-special", page: 2, cat: "gift", ko: "치즈곶감 10구 스페셜", en: "Cheese Dried Persimmon 10-Piece Special", sub: "dried persimmon 10pcs", img: "gotgam-10gu.webp", zh: "臻选芝士柿饼 10枚装", prices: [["", 58500]] },
    { id: "cheese-gotgam-10-double", page: 2, cat: "gift", ko: "치즈곶감 10구 더블", en: "Cheese Dried Persimmon 10-piece Double", sub: "dried persimmon 5pcs + Walnut Snack 5pcs", img: "gotgam-gangjeong-10gu.webp", zh: "芝士柿饼 10枚装·双拼", prices: [["", 46000]] },

    // ── PDF 3쪽
    { id: "gift-set-2", page: 3, cat: "gift", ko: "떡기리 선물세트 2호", en: "Gift Set No.2", sub: "sesame oil 200ml + perilla oil 100ml + Snack · Black box", pack: "검정 상자", img: "jongno/gift-set-2.jpg", zh: "糕福来 2号礼品盒", prices: [["", 47000]] },
    { id: "gift-set-3", page: 3, cat: "gift", ko: "떡기리 선물세트 3호", en: "Gift Set No.3", sub: "sesame oil & perilla oil 100ml + Snack 2pcs · Black box", pack: "검정 상자", img: "jongno/gift-set-3.jpg", zh: "糕福来 3号礼品盒", prices: [["", 51500]] },
    { id: "gift-set-5", page: 3, cat: "gift", ko: "떡기리 선물세트 5호", en: "Gift Set No.5", sub: "sesame oil & perilla oil 200ml + sesame oil & perilla oil 100ml + Snack 2pcs · Black box", pack: "검정 상자", img: "jongno/gift-set-5.jpg", zh: "糕福来 5号礼品盒", prices: [["", 93500]] },
    { id: "gift-set-4", page: 3, cat: "gift", ko: "떡기리 선물세트 4호", en: "Gift Set No.4", sub: "sesame oil & perilla oil 200ml + sesame oil & perilla oil 100ml · Black box", pack: "검정 상자", img: "jongno/gift-set-4.jpg", zh: "糕福来 4号礼品盒", prices: [["", 70000]] },
    { id: "gift-set-1", page: 3, cat: "gift", ko: "떡기리 선물세트 1호", en: "Gift Set No.1", sub: "sesame oil 200ml + perilla oil 200ml · Black box", pack: "검정 상자", img: "jongno/gift-set-1-graphic.jpg", zh: "糕福来 1号礼品盒", prices: [["", 46000]] },
    { id: "special-set-1", page: 3, cat: "gift", ko: "떡기리 특1호 세트", en: "Premium Gift Set No.1", sub: "sesame oil 200ml + perilla oil 200ml · White box", pack: "흰 상자", img: "jongno/special-set-1.jpg", zh: "糕福来 特1号礼盒", prices: [["", 46000]] },
    { id: "yakgwa-6p", page: 3, cat: "snack", ko: "떡기리 약과 6P", en: "ddeokgiri Yakgwa", zh: "糕福来药果", prices: [["", 10000]], unit: "6pcs" },
    { id: "special-set-2", page: 3, cat: "gift", ko: "떡기리 특2호 세트", en: "Premium Gift Set No.2", sub: "sesame oil & perilla oil 200ml + Snack 2pcs · White box", pack: "흰 상자", img: "jongno/special-set-2.jpg", zh: "糕福来 特2号礼盒", prices: [["", 69500]] },
    { id: "special-set-3", page: 3, cat: "gift", ko: "떡기리 특3호 세트", en: "Premium Gift Set No.3", sub: "sesame oil & perilla oil 200ml + sesame oil & perilla oil 100ml · White box", pack: "흰 상자", img: "jongno/special-set-3.jpg", zh: "糕福来 特3号礼盒", prices: [["", 70000]] },

    // ── PDF 4쪽
    { id: "value-set", page: 4, cat: "gift", ko: "떡기리 실속세트", en: "Value Set", sub: "sesame oil 150ml + perilla oil 150ml", zh: "糕福来超值礼盒", prices: [["", 37000]] },
    { id: "baramddeok", page: 4, cat: "ricecake", ko: "바람떡", en: "Wind rice cake", zh: "韩式风糕", prices: [["", 6000]] },
    { id: "kkulddeok", page: 4, cat: "ricecake", ko: "꿀떡", en: "Honey rice cake", zh: "蜂蜜糯米糕", prices: [["", 6000]] },
    { id: "oil-100", page: 4, cat: "oil", ko: "참기름 / 들기름 100ml", en: "Sesame oil / Perilla oil", zh: "香油 / 紫苏油", prices: [["", 12000]], extra: "노리개 포장 +2,000원, 보자기 포장 +3,000원 · Norigae +₩2,000, Bojagi +₩3,000" },
    { id: "walnut-ball", page: 4, cat: "snack", ko: "호두볼", en: "Walnut ball", zh: "糕福来核桃球", prices: [["5pcs", 6500], ["10pcs", 11000]] },
    { id: "oil-150", page: 4, cat: "oil", ko: "참기름 / 들기름 150ml", en: "Sesame oil / Perilla oil", zh: "香油 / 紫苏油", prices: [["", 17000]], extra: "노리개 포장 +2,000원, 보자기 포장 +3,000원 · Norigae +₩2,000, Bojagi +₩3,000" },
    { id: "seolgiddeok", page: 4, cat: "ricecake", ko: "설기떡", en: "Steamed white rice cake", sub: "Baekseolgi / sweet pumpkin / mugwort", zh: "韩式蒸米糕", prices: [["", 2000]] },
    { id: "red-bean-ddeok-3p", page: 4, cat: "ricecake", ko: "모듬 통팥떡(3P)", en: "Ball Red bean rice cake", sub: "Black sesame + sweet pumpkin castella + mugwort powder", zh: "什锦红豆糕", prices: [["", 6000]] },
    { id: "oil-200", page: 4, cat: "oil", ko: "참기름 / 들기름 200ml", en: "Sesame oil / Perilla oil", zh: "香油 / 紫苏油", prices: [["", 21000]], extra: "노리개 포장 +2,000원, 보자기 포장 +3,000원 · Norigae +₩2,000, Bojagi +₩3,000" },

    // ── PDF 5쪽
    { id: "yakgwa-8p", page: 5, cat: "snack", ko: "떡기리 약과 8P", en: "ddeokgiri Yakgwa", zh: "糕福来药果", prices: [["", 10000]], unit: "8pcs" },
    { id: "oranda-6p", page: 5, cat: "snack", ko: "오란다(Oranda) 6P", en: "Oranda · Crunchy Rice Puff Clusters", zh: "韩式米果", prices: [["", 13000]], unit: "6pcs" },
    { id: "onion-jeonbyeong", page: 5, cat: "snack", ko: "꼬마 양파 전병", en: "Little Onion Jeonbyeong", zh: "迷你洋葱薄脆饼", prices: [["", 6000]] },
    { id: "jeju-tangerine-snack", page: 5, cat: "snack", ko: "제주 감귤과자", en: "Jeju tangerine snack", zh: "济州柑橘酥", prices: [["", 4000]] },
    { id: "yugwa", page: 5, cat: "snack", ko: "유과(yugwa)", en: "Yugwa · Puffed Rice Cookie", zh: "韩式油菓", prices: [["", 6000]] },
    { id: "oranda-12p", page: 5, cat: "snack", ko: "오란다(Oranda) 12P", en: "Oranda · Crunchy Rice Puff Clusters", zh: "韩式米果", prices: [["", 25000]], unit: "12pcs" },
    { id: "fan-jeonbyeong", page: 5, cat: "snack", ko: "부채형 전병", en: "Fan-shaped Jeonbyeong", zh: "扇形薄脆饼", prices: [["", 6000]] },
    { id: "oranda", page: 5, cat: "snack", ko: "오란다", en: "Oranda · Crunchy Rice Puff Clusters", zh: "韩式米果", prices: [["", 6000]] },
    { id: "yakgwa", page: 5, cat: "snack", ko: "떡기리 약과", en: "ddeokgiri Yakgwa", zh: "糕福来药果", prices: [["", 2000]] },

    // ── PDF 6쪽 (빈 칸 2개)
    { id: "hangwa-set", page: 6, cat: "snack", ko: "한과세트", en: "Korean traditional cookie set", zh: "韩式传统糕点礼盒", prices: [["", 26000]] },
    { id: "herbal-blend-5", page: 6, cat: "tea", ko: "허브 블랜드 5입", en: "Herbal Blend 5 Packs", zh: "精选草本茶 5包", prices: [["", 10000]] },
    { id: "signature-blend-7", page: 6, cat: "tea", ko: "시그니처 블랜드 7입", en: "Signature Blend 7-pack", zh: "招牌精选茶 7包", prices: [["", 14000]] },
    { id: "premium-collection-12", page: 6, cat: "tea", ko: "프리미엄 컬렉션 12입", en: "Premium Collection 12-pack", zh: "尊享精选茶 12包", prices: [["", 24000]] },
    { id: "chamomile-blend-7", page: 6, cat: "tea", ko: "캐모마일 블랜드 7입", en: "Chamomile Blend 7-pack", zh: "洋甘菊精选茶 7包", prices: [["", 14000]] },
    { id: "tea-calendar", page: 6, cat: "tea", ko: "티 캘린더", en: "Tea Calendar", zh: "茶日历", prices: [["", 45000]], was: 55000 },
    { id: "gangjeong6-yakgwa", page: 6, cat: "snack", ko: "강정 6종 + 약과", en: "Six kinds of gangjeong + yakgwa", zh: "6种韩式米果糖＋传统药果", prices: [["", 10000]] }
  ]
};

// AI 초안 (사장님 검토 전) — 확정 정보(data/jongno.js)와 섞지 않으려고 따로 둔 파일.
// - ja: 일본어 상품명 초안 (PDF에 일본어가 없어서 새로 씀)
// - catNames: 분류 이름 4개 언어
// - desc: 맛·식감 짧은 설명 초안(한 줄로 짧게). 원재료를 지어내지 않도록 상품 이름에 드러난 것만 씀. 없으면 화면에서 설명 칸이 안 나옴.
window.JONGNO_DRAFT = {
  catNames: {
    injeolmi: { ko: "인절미", en: "Injeolmi", zh: "韩式糯米糕", ja: "インジョルミ" },
    ricecake: { ko: "떡류", en: "Rice Cakes", zh: "年糕", ja: "お餅" },
    snack: { ko: "전통간식", en: "Traditional Snacks", zh: "传统点心", ja: "伝統菓子" },
    gift: { ko: "선물세트", en: "Gift Sets", zh: "礼盒", ja: "ギフトセット" },
    oil: { ko: "참기름·들기름", en: "Sesame & Perilla Oil", zh: "香油·紫苏油", ja: "ごま油・えごま油" },
    tea: { ko: "차", en: "Tea", zh: "茶", ja: "お茶" }
  },
  ja: {
    "coconut-injeolmi": "ココナッツ・インジョルミ",
    "pumpkin-castella-injeolmi": "かぼちゃカステラ・インジョルミ",
    "mugwort-injeolmi": "よもぎインジョルミ",
    "black-sesame-injeolmi": "黒ごまインジョルミ",
    "sweet-potato-hotteok": "さつまいもホットク",
    "strawberry-castella-injeolmi": "いちごカステラ・インジョルミ",
    "nutrition-chalddeok": "栄養もち（ヨンヤン・チャルトック）",
    "cheese-gotgam-danja": "チーズ干し柿だんご",
    "mocha-castella-injeolmi": "モカカステラ・インジョルミ",
    "assorted-garaeddeok": "カレトック盛り合わせ",
    "walnut-gangjeong": "くるみカンジョン",
    "cheese-gotgam-6-double": "チーズ干し柿 6個 ダブル",
    "cheese-gotgam-6-special": "チーズ干し柿 6個 スペシャル",
    "cheese-gotgam-10-special": "チーズ干し柿 10個 スペシャル",
    "cheese-gotgam-10-double": "チーズ干し柿 10個 ダブル",
    "gift-set-1": "ギフトセット No.1",
    "gift-set-2": "ギフトセット No.2",
    "gift-set-3": "ギフトセット No.3",
    "gift-set-4": "ギフトセット No.4",
    "gift-set-5": "ギフトセット No.5",
    "special-set-1": "プレミアムギフトセット No.1",
    "special-set-2": "プレミアムギフトセット No.2",
    "special-set-3": "プレミアムギフトセット No.3",
    "yakgwa-6p": "薬菓（ヤックァ）6個入り",
    "yakgwa-8p": "薬菓（ヤックァ）8個入り",
    "yakgwa": "薬菓（ヤックァ）",
    "value-set": "お得セット",
    "baramddeok": "パラムトック（風餅）",
    "kkulddeok": "クルトック（はちみつ餅）",
    "oil-100": "ごま油／えごま油 100ml",
    "oil-150": "ごま油／えごま油 150ml",
    "oil-200": "ごま油／えごま油 200ml",
    "walnut-ball": "くるみボール",
    "seolgiddeok": "ソルギトック（蒸し餅）",
    "red-bean-ddeok-3p": "粒あん餅 盛り合わせ（3個）",
    "oranda-6p": "オランダ（米パフおこし）6個入り",
    "oranda-12p": "オランダ（米パフおこし）12個入り",
    "oranda": "オランダ（米パフおこし）",
    "onion-jeonbyeong": "ミニ玉ねぎチョンビョン（せんべい）",
    "jeju-tangerine-snack": "済州みかん菓子",
    "yugwa": "ユグァ（もち米菓子）",
    "fan-jeonbyeong": "扇形チョンビョン（せんべい）",
    "hangwa-set": "韓菓セット",
    "herbal-blend-5": "ハーブブレンド 5包",
    "signature-blend-7": "シグネチャーブレンド 7包",
    "premium-collection-12": "プレミアムコレクション 12包",
    "chamomile-blend-7": "カモミールブレンド 7包",
    "tea-calendar": "ティーカレンダー",
    "gangjeong6-yakgwa": "カンジョン6種＋薬菓"
  },
  desc: {
    "black-sesame-injeolmi": {
      ko: "고소한 흑임자 가루를 입힌 쫀득한 인절미.",
      en: "Chewy rice cake coated in nutty black sesame.",
      zh: "裹满黑芝麻粉的软糯年糕。",
      ja: "香ばしい黒ごまをまぶした、もちもちのお餅。"
    },
    "gift-set-2": {
      ko: "떡기리가 직접 만든 참기름·들기름과 강정 선물세트.",
      en: "Our own sesame and perilla oils with gangjeong sweets.",
      zh: "自制香油、紫苏油与韩式米果糖礼盒。",
      ja: "自家製ごま油・えごま油とカンジョンのセット。"
    }
  }
};

window.PHOTOS = {"coconut-injeolmi":"images/jongno/coconut-injeolmi.jpg","pumpkin-castella-injeolmi":"images/jongno/pumpkin-castella-injeolmi.jpg","mugwort-injeolmi":"images/jongno/mugwort-injeolmi.jpg","black-sesame-injeolmi":"images/injeolmi-heukimja.webp","strawberry-castella-injeolmi":"images/jongno/strawberry-castella-injeolmi.jpg","nutrition-chalddeok":"images/jongno/nutrition-chalddeok.jpg","cheese-gotgam-danja":"images/jongno/cheese-gotgam-danja.jpg","mocha-castella-injeolmi":"images/jongno/mocha-castella-injeolmi.jpg","assorted-garaeddeok":"images/garaeddeok.webp","walnut-gangjeong":"images/jongno/walnut-gangjeong.jpg","cheese-gotgam-6-double":"images/gotgam-gangjeong-6gu.webp","cheese-gotgam-6-special":"images/gotgam-6gu.webp","cheese-gotgam-10-special":"images/gotgam-10gu.webp","cheese-gotgam-10-double":"images/gotgam-gangjeong-10gu.webp","gift-set-2":"images/jongno/gift-set-2.jpg","gift-set-3":"images/jongno/gift-set-3.jpg","gift-set-5":"images/jongno/gift-set-5.jpg","gift-set-4":"images/jongno/gift-set-4.jpg","gift-set-1":"images/jongno/gift-set-1-graphic.jpg","special-set-1":"images/jongno/special-set-1.jpg","yakgwa-6p":"images/jongno/yakgwa-6p.jpg","special-set-2":"images/jongno/special-set-2.jpg","special-set-3":"images/jongno/special-set-3.jpg","baramddeok":"images/jongno/baramddeok.jpg","kkulddeok":"images/jongno/kkulddeok.jpg","oil-100":"images/jongno/oil-100.jpg","walnut-ball":"images/jongno/walnut-ball.jpg","oil-150":"images/jongno/oil-150.jpg","seolgiddeok":"images/jongno/seolgiddeok.jpg","red-bean-ddeok-3p":"images/jongno/red-bean-ddeok-3p.jpg","oil-200":"images/jongno/oil-200.jpg","yakgwa":"images/jongno/yakgwa.jpg","gangjeong6-yakgwa":"images/jongno/gangjeong6-yakgwa.jpg"};
