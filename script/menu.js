const button = document.getElementById("menuButton");
const menu = document.getElementById("popupMenu");

console.log(button);
console.log(menu);

button.addEventListener("click", function (e) {

    e.stopPropagation();

    menu.classList.toggle("show");

});

document.addEventListener("click", function () {

    menu.classList.remove("show");

});

menu.addEventListener("click", function (e) {

    e.stopPropagation();

});

const closeMenuBtn = document.querySelector('.closeMenu');
const popupMenu = document.getElementById('popupMenu');

if (closeMenuBtn && popupMenu) {
    const handleClose = function(e) {
        popupMenu.classList.remove('show');

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    closeMenuBtn.addEventListener('touchstart', function(e) {
        handleClose(e);
    }, { passive: true });

    closeMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        handleClose(e);
    });
}