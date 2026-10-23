// 떡기리 종로점 QR 상품 안내 — 상세 화면과 전체 상품 화면을 그림
// 상품 정보: data.js (window.JONGNO = 확정 정보, window.JONGNO_DRAFT = 일본어 이름·분류 이름)
// 각 페이지는 window.PAGE = { type: "detail" | "list", id, root } 를 먼저 정해 둔다.
(function () {
  var J = window.JONGNO, DR = window.JONGNO_DRAFT, PAGE = window.PAGE || { type: "list", root: "./" };
  var LANGS = ["ko", "en", "zh", "ja"];
  var T = {
    ko: { ingr: "주요 원재료", allergy: "알레르기", ask: "직원에게 문의", askNote: "원재료·알레르기 정보는 확인 중이에요. 구매 전 직원에게 물어봐 주세요.", show: "직원에게 보여 주세요", all: "전체 상품 보기", foot: "무방부제 · 무색소 · 무첨가물", note: "가격은 원화 기준이며, 진열 상황에 따라 품절일 수 있어요.", nophoto: "사진 등록 예정", contents: "구성", option: "포장",
          search: "상품 이름 검색", allCat: "전체", none: "찾는 상품이 없어요.", notFound: "상품을 찾지 못했어요. 아래 전체 상품을 확인해 주세요.",
          about: ["ABOUT DDEOKGIRI", "1972년부터 3대째,<br>떡을 오늘의 디저트로.", "방앗간에서 시작해 3대째 떡을 만들어 온 떡기리.<br>무방부제 · 무색소 · 무첨가물"] },
    en: { ingr: "Ingredients", allergy: "Allergens", ask: "Ask our staff", askNote: "Ingredient and allergy details are being confirmed. Please ask our staff before buying.", show: "Show to staff", all: "See all products", foot: "No preservatives · No artificial colors · No additives", note: "Prices are in Korean won (KRW). Please check the display for availability.", nophoto: "Photo coming soon", contents: "Contents", option: "Wrapping",
          search: "Search products", allCat: "All", none: "No matching products.", notFound: "Product not found. Please see all products below.",
          about: ["ABOUT DDEOKGIRI", "Since 1972, three generations —<br>turning tteok into today's dessert.", "1972년부터 3대째, 떡을 오늘의 디저트로.<br>Made by a family rice mill. No preservatives · No artificial colors · No additives."] },
    zh: { ingr: "主要原料", allergy: "过敏原", ask: "请咨询店员", askNote: "原料与过敏原信息确认中，购买前请咨询店员。", show: "请出示给店员", all: "查看全部商品", foot: "无防腐剂 · 无色素 · 无添加剂", note: "价格以韩元（KRW）计，是否有货请以店内陈列为准。", nophoto: "图片准备中", contents: "组成", option: "包装",
          search: "搜索商品", allCat: "全部", none: "没有找到相关商品。", notFound: "未找到该商品，请查看下方全部商品。",
          about: ["ABOUT DDEOKGIRI", "始于1972年，三代传承，<br>让年糕成为今天的甜点。", "1972년부터 3대째, 떡을 오늘의 디저트로.<br>无防腐剂 · 无色素 · 无添加剂"] },
    ja: { ingr: "主な原材料", allergy: "アレルゲン", ask: "スタッフへ", askNote: "原材料・アレルギー情報は確認中です。ご購入前にスタッフへお尋ねください。", show: "スタッフに見せる", all: "すべての商品を見る", foot: "保存料・着色料・添加物 不使用", note: "価格は韓国ウォン（KRW）です。在庫は店頭の陳列をご確認ください。", nophoto: "写真準備中", contents: "内容", option: "包装",
          search: "商品名で検索", allCat: "すべて", none: "該当する商品がありません。", notFound: "商品が見つかりません。下のすべての商品をご覧ください。",
          about: ["ABOUT DDEOKGIRI", "1972年から三代、<br>お餅を今日のデザートに。", "1972년부터 3대째, 떡을 오늘의 디저트로.<br>保存料・着色料・添加物 不使用"] }
  };
  var params = new URLSearchParams(location.search);
  var lang = pickLang(), cat = params.get("cat") || "all";

  // 언어: ?lang= → 손님이 고른 언어(저장) → 휴대폰 언어 → 영어
  function pickLang() {
    var q = params.get("lang");
    if (LANGS.indexOf(q) >= 0) return q;
    try { var s = localStorage.getItem("ddeokgiri.lang"); if (LANGS.indexOf(s) >= 0) return s; } catch (e) {}
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    for (var k = 0; k < list.length; k++) {
      var l = String(list[k]).toLowerCase().slice(0, 2);
      if (LANGS.indexOf(l) >= 0) return l;
    }
    return "en";
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function name(i) { return lang === "ko" ? i.ko : lang === "zh" ? i.zh : lang === "ja" ? (DR.ja[i.id] || i.en) : i.en; }
  function won(v) { return lang === "ko" ? v.toLocaleString("en-US") + "원" : "₩" + v.toLocaleString("en-US"); }
  function detailUrl(id) { return PAGE.root + "p/" + id + "/"; }
  // 사진: 만들 때 찾은 사진(window.PHOTOS)만 씀. 없으면 "사진 등록 예정" 칸
  function photo(i, cls, label, lazy) {
    var P = lazy && window.THUMBS && window.THUMBS[i.id] ? window.THUMBS : (window.PHOTOS || {});   // 목록은 크기 맞춘 사진
    if (!P[i.id]) return '<div class="' + cls + ' nophoto"><span>' + label + '</span></div>';
    var src = PAGE.root + P[i.id];
    return '<div class="' + cls + '"><img src="' + src + '" alt=""' + (lazy ? ' loading="lazy"' : "") +
      ' onerror="this.parentNode.classList.add(\'nophoto\');this.remove()"><span>' + label + "</span></div>";
  }

  function detail(i) {
    var t = T[lang], d = window.SHOW_DRAFT_DESC && DR.desc[i.id];
    var extra = i.extra ? i.extra.split(" · ")[lang === "ko" ? 0 : 1] : "";
    var price = i.prices.length > 1 || i.prices[0][0]
      ? '<div class="d-sizes">' + i.prices.map(function (p) { return "<span><em>" + p[0] + "</em>" + won(p[1]) + "</span>"; }).join("") + "</div>"
      : '<div class="d-price">' + (i.was ? "<s>" + won(i.was) + "</s>" : "") + won(i.prices[0][1]) + (i.unit ? "<small>" + i.unit + "</small>" : "") + "</div>";
    return photo(i, "hero", t.nophoto) +
      '<main class="d">' +
        '<div class="d-cat">' + esc(DR.catNames[i.cat][lang]) + "</div>" +
        '<h1 class="d-name">' + esc(name(i)) + "</h1>" +
        (lang !== "ko" ? '<div class="d-ko">' + esc(i.ko) + "</div>" : "") +
        price +
        (d ? '<p class="d-desc">' + esc(d[lang]) + "</p>" : "") +
        (i.sub || extra ? '<dl class="d-facts">' + (i.sub ? "<dt>" + t.contents + "</dt><dd>" + esc(i.sub) + "</dd>" : "") + (extra ? "<dt>" + t.option + "</dt><dd>" + esc(extra) + "</dd>" : "") + "</dl>" : "") +
        '<div class="d-info"><div><b>' + t.ingr + "</b><span>" + t.ask + "</span></div><div><b>" + t.allergy + "</b><span>" + t.ask + "</span></div><p>" + t.askNote + "</p></div>" +
        (lang !== "ko" ? '<div class="d-staff">' + t.show + " <b>" + esc(i.ko) + "</b></div>" : "") +
        '<p class="foot">' + t.foot + "<small>" + t.note + "</small></p>" +
      "</main>" +
      '<div class="bar"><a class="btn" id="go-all" href="' + PAGE.root + "?lang=" + lang + '">' + t.all + " →</a></div>";
  }

  function list(msg) {
    var t = T[lang];
    return (msg ? '<p class="empty">' + msg + "</p>" : "") +
      '<label class="search"><span aria-hidden="true">🔍</span><input id="q" type="search" placeholder="' + t.search + '" value="' + esc(params.get("q") || "") + '"></label>' +
      '<div class="chips" id="chips"></div><div id="secs"></div>' +
      '<section class="about"><small>' + t.about[0] + "</small><h3>" + t.about[1] + "</h3><p>" + t.about[2] + "</p></section>" +
      '<p class="foot list-foot">' + t.note + "</p>";
  }
  function fillList() {
    var t = T[lang], kw = document.getElementById("q").value.trim().toLowerCase();
    document.getElementById("chips").innerHTML = '<button data-c="all" class="' + (cat === "all" ? "on" : "") + '">' + t.allCat + "</button>" +
      J.categories.map(function (c) { return '<button data-c="' + c.id + '" class="' + (cat === c.id ? "on" : "") + '">' + DR.catNames[c.id][lang] + "</button>"; }).join("");
    var html = "", count = 0;
    J.categories.forEach(function (c) {
      if (cat !== "all" && cat !== c.id) return;
      var items = J.items.filter(function (i) {
        return i.cat === c.id && (!kw || [i.ko, i.en, i.zh, DR.ja[i.id] || ""].join(" ").toLowerCase().indexOf(kw) >= 0);
      });
      if (c.id === "gift") items.sort(function (a, b) { return a.ko.localeCompare(b.ko, "ko", { numeric: true }); });   // 선물세트는 1호→5호 순서
      if (!items.length) return;
      count += items.length;
      var cn = DR.catNames[c.id];
      html += '<section class="sec"><h2>' + cn[lang] + (lang !== "ko" ? "<small>" + cn.ko + "</small>" : "") + '</h2><div class="grid">' +
        items.map(function (i) {
          var p = i.prices.map(function (x) { return (x[0] ? '<span class="sz">' + x[0] + "</span>" : "") + (i.was ? "<s>₩" + i.was.toLocaleString("en-US") + "</s>" : "") + "₩" + x[1].toLocaleString("en-US"); }).join(" · ");
          return '<a class="tile" href="' + detailUrl(i.id) + "?lang=" + lang + '">' + photo(i, "ph", t.nophoto, true) +
            '<div class="t"><div class="n">' + esc(name(i)) + "</div>" + (lang !== "ko" ? '<div class="k">' + esc(i.ko) + "</div>" : "") +
            '<div class="p">' + p + (i.unit ? " <small>" + i.unit + "</small>" : "") + "</div></div></a>";
        }).join("") + "</div></section>";
    });
    document.getElementById("secs").innerHTML = count ? html : '<p class="empty">' + t.none + "</p>";
  }

  function render() {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
    [].forEach.call(document.querySelectorAll("#langs button"), function (b) { b.classList.toggle("on", b.getAttribute("data-l") === lang); });
    var app = document.getElementById("app");
    var item = PAGE.type === "detail" && J.items.filter(function (i) { return i.id === PAGE.id; })[0];
    if (item) {
      app.innerHTML = detail(item);
      document.title = name(item) + " · DDEOK GIRI";
    } else {
      app.innerHTML = list(PAGE.type === "detail" ? T[lang].notFound : "");
      document.title = "DDEOK GIRI · JONGNO";
      fillList();
      document.getElementById("q").oninput = fillList;
      document.getElementById("chips").onclick = function (e) { var c = e.target.getAttribute("data-c"); if (c) { cat = c; fillList(); } };
    }
  }

  document.getElementById("langs").onclick = function (e) {
    var l = e.target.getAttribute("data-l");
    if (!l) return;
    lang = l;
    try { localStorage.setItem("ddeokgiri.lang", l); } catch (err) {}
    params.set("lang", l);
    history.replaceState(null, "", location.pathname + "?" + params.toString());
    render();
  };
  render();
})();
