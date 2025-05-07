 const editRemoveToggle = () => {
  const btnToggle = document.getElementById('edit-remove-container')
  btnToggle.style.display = btnToggle.style.display === "none" ? "flex" : "none";
 }

const threeDotBtn = document.getElementById("edit-remove-toggle")
if (threeDotBtn) {
  threeDotBtn.addEventListener("click", editRemoveToggle)
}
