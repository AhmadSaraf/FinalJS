export function imgPlaceHolder(show) {
  const placeHolderEl = document.getElementById("image-placeholder");
  if (show) {
    placeHolderEl.classList.add("flex");
    placeHolderEl.classList.remove("hidden");
  } else {
    placeHolderEl.classList.add("hidden");
    placeHolderEl.classList.remove("flex");
  }
}
