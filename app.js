var navbartoggle = document.querySelector(".navbar-menu-toggle");
var sidenav = document.querySelector(".side-nav-bar");
var close = document.getElementById("close")
navbartoggle.addEventListener("click", function(){
    sidenav.style.left = "0"
})
close.addEventListener("click", function(){
    sidenav.style.left = "-110%"
})


