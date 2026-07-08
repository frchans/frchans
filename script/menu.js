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

document.querySelector('.closeMenu').addEventListener('click', function() {
    document.getElementById('popupMenu').classList.remove('show');
});