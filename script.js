let scrollcontainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollcontainer.style.scrollBehavior = "smooth";

nextBtn.addEventListener("click", ()=>{
scrollcontainer.style.scrollBehavior = "smooth";
scrollcontainer.scrollLeft += 900;

});

backBtn.addEventListener("click", ()=>{
scrollcontainer.style.scrollBehavior = "smooth";
scrollcontainer.scrollLeft -= 900;

});