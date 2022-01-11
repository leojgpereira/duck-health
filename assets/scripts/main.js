document.addEventListener('DOMContentLoaded', function(){
    feather.replace();

    var menuToggle = document.getElementsByClassName("header__menu-toggle");
    var navbar = document.getElementsByClassName("navbar")[0];

    Array.prototype.forEach.call(menuToggle, toggle => {
        toggle.addEventListener("click", function(){
            if (navbar.classList.contains("navbar--visible")) {
                navbar.classList.remove("navbar--visible");
            } else {
                navbar.classList.add("navbar--visible");
            }
        }); 
    });
});