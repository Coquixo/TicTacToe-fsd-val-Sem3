let casillasColection = document.querySelectorAll(".box-all");
let borrador = document.getElementById("borrar");
let turno = document.getElementById("turno");
let turnTit = document.getElementById("turnTit");
const ficha1 = document.getElementById("fichas1");
const ficha2 = document.getElementById("fichas2");
const lastWinner = document.getElementById("lastWinner");
turno.innerHTML = player1;



borrador.addEventListener('click', () => {
    casillas.forEach((casilla) => {
        casilla.innerHTML = "";
        ficha1.innerHTML = 6;
        ficha2.innerHTML = 6;
        contador = 12;
        turnTit.innerHTML = "Turn:";
        // turno.innerHTML = player2;
        casilla.classList.remove('WinLine');
        turnT.classList.remove('WinLine');
        turnTit.classList.remove('WinLine');
        

    })
})