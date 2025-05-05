const themeToggleBtns = document.getElementsByClassName("theme-toggle");

const themeToggle = function () {
  document.documentElement.classList.toggle("dark");
};

const addHandlerThemeToggle = function () {
  [...themeToggleBtns].forEach((btn) =>
    btn.addEventListener("click", themeToggle),
  );
};

addHandlerThemeToggle();
