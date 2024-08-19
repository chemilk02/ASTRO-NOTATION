//click event - search
const btnSearchFilterOpen = document.querySelector("#btn-search-filter-open");
const btnSearchFilterClose = document.querySelector("#btn-search-filter-close");

btnSearchFilterOpen.addEventListener("click", ()=>{
  btnSearchFilterOpen.style.display = "none"
  btnSearchFilterClose.style.display = "flex"
})

btnSearchFilterClose.addEventListener("click", ()=>{
  btnSearchFilterOpen.style.display = "flex"
  btnSearchFilterClose.style.display = "none"
})