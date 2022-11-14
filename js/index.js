const navItems = document.querySelector(".nav-items");
const button = document.querySelector(".toggle")
const close = document.querySelector(".close")

button.addEventListener('click', () =>{
    navItems.classList.add("show-links")
})

close.addEventListener('click', () =>{
    navItems.classList.remove("show-links")
})