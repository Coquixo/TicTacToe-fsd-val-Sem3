let insertJ1 = document.getElementById('insertName1');
let insertJ2 = document.getElementById('insertName2');
const submit = document.getElementById('Submit')
const playerOption1 = document.getElementById('playerOption1')
const cpuOption1 = document.getElementById('cpuOption1')
const playerOption2 = document.getElementById('playerOption2')
const cpuOption2 = document.getElementById('cpuOption2')




submit.addEventListener('click', () => {

    /*guardamos los datos en session storage start*/
    insertJ1.value = sessionStorage.setItem("player1", insertJ1.value);
    insertJ2.value = sessionStorage.setItem("player2", insertJ2.value);
    playerOption1.value = sessionStorage.setItem("valuePlayer1", playerOption1.value);
    playerOption2.value = sessionStorage.setItem("valuePlayer2", playerOption2.value);
    /*guardamos los datos en session storage end*/



    /*recuperamos los datos y los escribimos en settings start*/
    let player1 = sessionStorage.getItem('player1');
    let player2 = sessionStorage.getItem('player2');
    nameJ1.innerHTML = `${player1}`
    nameJ2.innerHTML = `${player2}`
    /*recuperamos los datos y los escribimos en settings end*/


})
