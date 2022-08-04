var elModalOpenButton = document.querySelector(".site-header__btn");
var elModalOpenlink = document.querySelector(".site-header__right");

elModalOpenButton.addEventListener("click", function (){
    elModalOpenlink.classList.toggle("site-header--right-on");
})
