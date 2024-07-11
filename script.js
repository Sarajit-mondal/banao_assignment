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




// Get modal element
var modal = document.getElementById("myModal");

// Get open modal button
var openModalBtn = document.getElementById("openModalBtn");

// Get close button
var closeBtn = document.getElementsByClassName("close")[0];

// Listen for open click
openModalBtn.onclick = function() {
    modal.classList.remove("hidden");
}

// Listen for close click
closeBtn.onclick = function() {
    modal.classList.add("hidden");
}

// Listen for outside click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add("hidden");
    }
}

