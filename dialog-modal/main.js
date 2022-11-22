const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const dialog = document.querySelector("#dialog");

openBtn.addEventListener("click", () => {
  dialog.showModal()
});

closeBtn.addEventListener('click', ()=>{
  dialog.close()
})
