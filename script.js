const dropDownBtn = document.querySelectorAll(".drop_down_btn");
const dropDownMenu = document.querySelectorAll(".drop_down");
// Get modal element
var modal = document.getElementById("myModal");

// Get open modal button
var openModalBtn = document.getElementById("openModalBtn");
// Get open modal button
var openModalBtnTwo = document.getElementById("openModalBtnTwo");

// Get close button
var closeBtn = document.getElementsByClassName("close")[0];

// Get modal sign in element
var modalSignIn = document.getElementById("mySignInModal");

// Get open modal sign in button
var openModalBtnSignIn = document.getElementById("signInOpenModalBtn");





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





// Listen for open click
openModalBtn.onclick = function() {
  modalSignIn.classList.add("hidden")
    modal.classList.remove("hidden");
}
// Listen for open tWO click
openModalBtnTwo.onclick = function() {
  modalSignIn.classList.add("hidden")
    modal.classList.remove("hidden");
}
openModalBtnSignIn.onclick = ()=>{
  modal.classList.add("hidden");
  modalSignIn.classList.remove("hidden")
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

