window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#000000"
            },
            "button": {
                "background": "#ffffff"
            }
        },
        "content": {
            "message": "Utilizamos cookies propias y de terceros para mejorar nuestros servicios. Si continúa con la navegación, consideraremos que acepta este uso.",
            "dismiss": "ACEPTAR",
            "link": "Leer más",
            "href": "#"
        }
    })
});


const coockie = document.getElementById('coockie');
console.log(coockie)
window.onload = () => {
    document.getElementById("aceptar").addEventListener('click', () => {

        coockie.classList.add('noDisplay');
    });
}
