const closePopUp = document.querySelector("#close");
const myModal = document.querySelector(".mymodal");
closePopUp.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("check");
  myModal.classList.add("hidden");
});
