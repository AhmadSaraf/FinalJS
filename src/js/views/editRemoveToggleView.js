// Edit|Remove box toggle
export const editRemoveToggle = (target) => {
  console.log(target)
  const btnToggle = target.getElementsByClassName("edit-remove-container")[0];
  btnToggle.style.display =
    btnToggle.style.display === "flex" ? "none" : "flex";
};
export const editRemoveHide = (parent) => {
  const btnToggles = parent.getElementsByClassName("edit-remove-container");
  [...btnToggles].forEach((toggle) => (toggle.style.display = "none"));
};
