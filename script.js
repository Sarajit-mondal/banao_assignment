const dropDownBtn = document.querySelectorAll(".drop_down_btn");
const dropDownMenu = document.querySelectorAll(".drop_down");

dropDownBtn.forEach((btn, btnInx) => {
  btn.addEventListener("click", () => {
    console.log(btnInx);
    dropDownMenu.forEach((menu, menuInx) => {
      if (btnInx === menuInx) {
        menu.classList.toggle("hidden");
      }
    });
  });
});
console.log(dropDownMenu);
