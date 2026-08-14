(function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  function close() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "打开菜单");
  }

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
  });

  // Close the menu after tapping a link (mobile)
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) close();
  });

  // Close on outside click / resize to desktop
  document.addEventListener("click", function (e) {
    if (nav.classList.contains("open") && !nav.contains(e.target) && !toggle.contains(e.target)) close();
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) close();
  });

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
