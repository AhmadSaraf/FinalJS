const tagsBtn = document.getElementById("tags-menu");

const tagMenuToggle = (event) => {
  event.preventDefault();
  const btnTagToggle = document.getElementById("tag-btns-container");
  const rarrIcon = tagsBtn.querySelector("svg");
  btnTagToggle.classList.toggle("hidden");
  btnTagToggle.classList.toggle("flex");
  if (rarrIcon) {
    rarrIcon.classList.toggle("fill-lightGary");
    rarrIcon.classList.toggle("fill-none");
    rarrIcon.classList.toggle("rotate-90");
  }
};

tagsBtn.addEventListener("click", tagMenuToggle);
