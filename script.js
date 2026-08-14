// Hide All：点击后隐藏整页内容（含页脚与背景层），任意点击恢复
(function () {
  "use strict";

  var body = document.body;
  var hideAll = document.getElementById("hide-all");

  if (hideAll) {
    hideAll.addEventListener("click", function (e) {
      e.stopPropagation();
      body.classList.add("all-hidden");
    });
  }

  document.addEventListener("click", function () {
    if (body.classList.contains("all-hidden")) {
      body.classList.remove("all-hidden");
    }
  });
})();
