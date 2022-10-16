window.addEventListener("load", function () {
});

const coockie = document.getElementById('coockie');
console.log(coockie)
window.onload = () => {
    document.getElementById("aceptar").addEventListener('click', () => {

        coockie.classList.add('noDisplay');
    });
}
