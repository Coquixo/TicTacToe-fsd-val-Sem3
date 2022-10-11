// ------------------------------------------------Añadir x u o por turnos
let casillasColection = document.getElementsByClassName("box-all");
let borrador = document.getElementById("borrar");
let turno = document.getElementById("turno");
const ficha1 = document.getElementById("fichas1");
const ficha2 = document.getElementById("fichas2");


ficha1.innerHTML = 6;
ficha2.innerHTML = 6;
turno.innerHTML = 1;
let contador = 12;

let casillas = Array.from(casillasColection);
let interruptor = true;

casillas.map((casilla, /*index*/) => {
    casilla.addEventListener('click', () => {
        if (contador != 0) {
            if (casilla.innerHTML == "") {
                if (interruptor) {
                    casilla.innerHTML = "X"
                    turno.innerHTML = 2;
                    ficha1.innerHTML--;
                } else {
                    casilla.innerHTML = "O";
                    turno.innerHTML = 1;
                    ficha2.innerHTML--;
                }
                interruptor = !interruptor;

            }
            contador--;
        }

    });

});

// fichaa1.appendChild(fichas1);

borrador.addEventListener('click', () => {
    casillas.map((limpiar) => {
        limpiar.innerHTML = "";
        ficha1.innerHTML = 6;
        ficha2.innerHTML = 6;
        contador = 12;
    })
})



// ------------------------------------------------Añadir x u o por turnos end
// ---------------------------------------------Comprobador win

function selectWinnerBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    turn.innerHTML = b1.innerHTML + " is a winner";
    turn.style.fontSize = "40px";
}
function GetWinner() {

    let Box1 = document.getElementById("Box1"),
        Box2 = document.getElementById("Box2"),
        Box3 = document.getElementById("Box3"),
        Box4 = document.getElementById("Box4"),
        Box5 = document.getElementById("Box5"),
        Box6 = document.getElementById("Box6"),
        Box7 = document.getElementById("Box7"),
        Box8 = document.getElementById("Box8"),
        Box9 = document.getElementById("Box9");



    if (Box1.innerHTML !== "" && Box1.innerHTML === Box2.innerHTML && Box1.innerHTML === Box3.innerHTML)
        selectWinnerBoxes(Box1, Box2, Box3);

    if (Box4.innerHTML !== "" && Box4.innerHTML === Box5.innerHTML && Box4.innerHTML === Box6.innerHTML)
        selectWinnerBoxes(Box4, Box5, Box6);

    if (Box7.innerHTML !== "" && Box7.innerHTML === Box8.innerHTML && Box7.innerHTML === Box9.innerHTML)
        selectWinnerBoxes(Box7, Box8, Box9);

    if (Box1.innerHTML !== "" && Box1.innerHTML === Box4.innerHTML && Box1.innerHTML === Box7.innerHTML)
        selectWinnerBoxes(Box1, Box4, Box7);

    if (Box2.innerHTML !== "" && Box2.innerHTML === Box5.innerHTML && Box2.innerHTML === Box8.innerHTML)
        selectWinnerBoxes(Box2, Box5, Box8);

    if (Box3.innerHTML !== "" && Box3.innerHTML === Box6.innerHTML && Box3.innerHTML === Box9.innerHTML)
        selectWinnerBoxes(Box3, Box6, Box9);

    if (Box1.innerHTML !== "" && Box1.innerHTML === Box5.innerHTML && Box1.innerHTML === Box9.innerHTML)
        selectWinnerBoxes(Box1, Box5, Box9);

    if (Box3.innerHTML !== "" && Box3.innerHTML === Box5.innerHTML && Box3.innerHTML === Box7.innerHTML)
        selectWinnerBoxes(Box3, Box5, Box7);

}

// ---------------------------------------------Comprobador win







// ------------------------------------ Coockie ---------------
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


/*Hide Coockie Window*/
const coockie = document.getElementById('coockie');

document.getElementById("aceptar").addEventListener('click', function () {

    coockie.classList.add('noDisplay');


})
/* */

/*prubeba*/

