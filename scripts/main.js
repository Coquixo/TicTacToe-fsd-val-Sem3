let valueP1 = sessionStorage.getItem('valuePlayer1');
let valueP2 = sessionStorage.getItem('valuePlayer2');



let casillas = casillasColection;
let contador = 12;
let changer = true;
let starter = true;
let borrarFicha = true;
turnPlayer.innerHTML = JSON.parse(sessionStorage.getItem('player1')).name
let p1 = JSON.parse(sessionStorage.getItem('player1')).value
let p2 = JSON.parse(sessionStorage.getItem('player2')).value


const borrarFichaHTML = (casilla) => {
    if (changer && casilla.innerHTML === "X") {
        casilla.innerHTML = "";
        return true
    } else if (!changer && casilla.innerHTML === "O") {
        casilla.innerHTML = "";
        return true
    }
    return false
}

const jugarFicha = (casilla) => {
    if (casilla.innerHTML == "") {
        if (changer) {
            casilla.innerHTML = "X"
            turnPlayer.innerHTML = JSON.parse(sessionStorage.getItem('player2')).name;
            Win();
            ficha1.innerHTML--;
        } else {
            casilla.innerHTML = "O";
            turnPlayer.innerHTML = JSON.parse(sessionStorage.getItem('player1')).name;
            Win();
            ficha2.innerHTML--;

        }
        changer = !changer;

        contador--;
        return true
    }
    return false
}

const getRandomCasilla = () => {
    const random = Math.round(Math.random() * 8)
    return casillas[random]
}

const cpu = () => {
    if (contador > 6) {
        let fichaIsPlayed = jugarFicha(getRandomCasilla())
        while (!fichaIsPlayed) {
            fichaIsPlayed = jugarFicha(getRandomCasilla())
        }
    } else if (contador <= 6 && contador != 0) {
        let fichaIsPlayed = borrarFichaHTML(getRandomCasilla())
        while (!fichaIsPlayed) {
            fichaIsPlayed = borrarFichaHTML(getRandomCasilla())
        }
        fichaIsPlayed = jugarFicha(getRandomCasilla())
        while (!fichaIsPlayed) {
            fichaIsPlayed = jugarFicha(getRandomCasilla())
        }
    }
}

const isBotTurn = () => {
    return (p1 == 2 && changer) || (p2 == 2 && !changer)
}

const mainGame = () => {
    casillas.forEach((casilla) => {
        casilla.innerHTML = "";
        casilla.addEventListener('click', () => {
            if (Win()) {
                eraseTable();

            } else if (contador > 6) {
                jugarFicha(casilla)
            } else if (contador <= 6 && contador != 0) {
                if (borrarFicha) {
                    borrarFicha = !borrarFichaHTML(casilla);
                } else {
                    borrarFicha = jugarFicha(casilla)
                }
            }
            if (isBotTurn() && !Win()) {
                cpu()
            }
        });
    });

    if (isBotTurn()) {
        cpu()
    }
}

// ------------------------------------Resetear game start
const eraseTable = () => {
    casillas.forEach((casilla) => {
        casilla.innerHTML = "";
        casilla.classList.remove('WinLine');
    })
    ficha1.innerHTML = 6;
    ficha2.innerHTML = 6;
    contador = 12;
    turnTit.innerHTML = "Turn:";
    starter = !starter
    changer = starter
    const starterPlayerName = starter ? sessionStorage.getItem('player1') : sessionStorage.getItem('player2')
    turnPlayer.innerHTML = JSON.parse(starterPlayerName).name;
    turnT.classList.remove('WinLine');
    turnTit.classList.remove('WinLine');
    if (isBotTurn()) {
        cpu()
    }
}
borrador.addEventListener('click', eraseTable)


// ------------------------------------Resetear game end



// ---------------------------------------------Comprobador win

const selectWinnerBoxes = (winner, winner2, winner3) => {

    if (winner.innerHTML == "X") {
        turnTit.innerHTML = JSON.parse(sessionStorage.getItem('player1')).name + " is the winner";
        sessionStorage.setItem('winner', JSON.parse(sessionStorage.getItem('player1')).name)

    } else if (winner.innerHTML == "O") {
        turnTit.innerHTML = JSON.parse(sessionStorage.getItem('player2')).name + " is the winner";
        sessionStorage.setItem('winner', JSON.parse(sessionStorage.getItem('player2')).name)
    }
    turnPlayer.innerHTML = "Thanks for playing";
    winner.classList.add('WinLine');
    winner2.classList.add('WinLine');
    winner3.classList.add('WinLine');
    // changer = !changer
    contador = 0;

}

const Win = () => {

    let Box1 = document.getElementById("Box1"),
        Box2 = document.getElementById("Box2"),
        Box3 = document.getElementById("Box3"),
        Box4 = document.getElementById("Box4"),
        Box5 = document.getElementById("Box5"),
        Box6 = document.getElementById("Box6"),
        Box7 = document.getElementById("Box7"),
        Box8 = document.getElementById("Box8"),
        Box9 = document.getElementById("Box9");

    if (Box1.innerHTML !== "" && Box1.innerHTML === Box2.innerHTML && Box1.innerHTML === Box3.innerHTML) {
        selectWinnerBoxes(Box1, Box2, Box3); return true;

    }

    if (Box4.innerHTML !== "" && Box4.innerHTML === Box5.innerHTML && Box4.innerHTML === Box6.innerHTML) {
        selectWinnerBoxes(Box4, Box5, Box6); return true;

    }
    if (Box7.innerHTML !== "" && Box7.innerHTML === Box8.innerHTML && Box7.innerHTML === Box9.innerHTML) {
        selectWinnerBoxes(Box7, Box8, Box9); return true;

    }
    if (Box1.innerHTML !== "" && Box1.innerHTML === Box4.innerHTML && Box1.innerHTML === Box7.innerHTML) {
        selectWinnerBoxes(Box1, Box4, Box7); return true;

    }
    if (Box2.innerHTML !== "" && Box2.innerHTML === Box5.innerHTML && Box2.innerHTML === Box8.innerHTML) {
        selectWinnerBoxes(Box2, Box5, Box8); return true;

    }
    if (Box3.innerHTML !== "" && Box3.innerHTML === Box6.innerHTML && Box3.innerHTML === Box9.innerHTML) {
        selectWinnerBoxes(Box3, Box6, Box9); return true;

    }
    if (Box1.innerHTML !== "" && Box1.innerHTML === Box5.innerHTML && Box1.innerHTML === Box9.innerHTML) {
        selectWinnerBoxes(Box1, Box5, Box9); return true;

    }
    if (Box3.innerHTML !== "" && Box3.innerHTML === Box5.innerHTML && Box3.innerHTML === Box7.innerHTML) {
        selectWinnerBoxes(Box3, Box5, Box7); return true;

    }
    return false;

}

mainGame()
