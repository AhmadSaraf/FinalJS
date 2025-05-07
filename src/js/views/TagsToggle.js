const tagMenuToggle = (event) => {
  event.preventDefault();
  const btnTagToggle = document.getElementById('tag-btns-container');
  // Get computed style to check current display
  const currentDisplay = window.getComputedStyle(btnTagToggle).display;
  btnTagToggle.style.display = currentDisplay === "none" ? "flex" : "none";
}

const tagsBtn = document.getElementById("tags-menu");
tagsBtn.addEventListener("click", tagMenuToggle);
