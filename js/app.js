const menu = document.querySelector('.mobile_menu');
const hamburger_icon = document.querySelector('.icon_hamburger');
const close_menu = document.querySelector('.icon_close');

// to hide menu
menu.classList.add('display');

hamburger_icon.addEventListener("click", function(){
    menu.classList.remove("display");
})
close_menu.addEventListener('click', function(){
menu.classList.add('display');
})

// alert("This is loop studio project");
