const navItems = document.querySelector(".nav-items");
const button = document.querySelector(".toggle")
const close = document.querySelector(".close")
const overlay = document.querySelector(".overlay")

button.addEventListener('click', () =>{
    navItems.classList.add("show-links")
    overlay.classList.remove("hidden")
})

close.addEventListener('click', () =>{
    navItems.classList.remove("show-links")
    overlay.classList.add("hidden")

})