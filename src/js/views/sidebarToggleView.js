const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const btnOpen = document.getElementById("sidebar-open-btn");
const btnClose = document.getElementById("sidebar-close-btn");

const toggleSidebar = function () {
  sidebar.classList.toggle("translate-x-full");
  ["opacity-0", "pointer-events-none", "invisible"].forEach((item) =>
    overlay.classList.toggle(item),
  );
};

const addHandlerToggleSidebar = function () {
  [btnClose, overlay, btnOpen].forEach((el) =>
    el.addEventListener("click", toggleSidebar),
  );
};

addHandlerToggleSidebar();
