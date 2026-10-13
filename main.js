(function () { "use strict"; var body = document.body; var hideAll = document.getElementById("hide-all"); if (hideAll) { hideAll.addEventListener("click", function (e) { e.stopPropagation(); body.classList.add("all-hidden"); }); } document.addEventListener("click", function () { if (body.classList.contains("all-hidden")) { body.classList.remove("all-hidden"); } }); })();
(function () {
    "use strict";
    var root = document.documentElement, btn = document.getElementById("lang-toggle");
    var zh = [].map.call(document.querySelectorAll("[data-en]"), function (el) { return el.textContent; });
    var zhLabel = [].map.call(document.querySelectorAll("[data-en-label]"), function (el) { return el.getAttribute("aria-label"); });
    function apply(lang) {
      var en = lang === "en";
      [].forEach.call(document.querySelectorAll("[data-en]"), function (el, i) { el.textContent = en ? el.dataset.en : zh[i]; });
      [].forEach.call(document.querySelectorAll("[data-en-label]"), function (el, i) { el.setAttribute("aria-label", en ? el.dataset.enLabel : zhLabel[i]); });
      root.lang = en ? "en" : "zh-CN";
      btn.textContent = en ? "中文" : "EN";
    }
    var saved; try { saved = localStorage.getItem("lang"); } catch (e) { }
    apply(saved || (/^zh/i.test(navigator.language) ? "zh" : "en"));
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var next = root.lang === "en" ? "zh" : "en";
      apply(next);
      try { localStorage.setItem("lang", next); } catch (e) { }
    });
  })();
