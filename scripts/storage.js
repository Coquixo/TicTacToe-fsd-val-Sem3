let insertJ1 = document.getElementById('insertName1');
let insertJ2 = document.getElementById('insertName2');
const submit = document.getElementById('Submit')
const playerOption1 = document.getElementById('playerOption1')
const cpuOption1 = document.getElementById('cpuOption1')
const playerOption2 = document.getElementById('playerOption2')
const cpuOption2 = document.getElementById('cpuOption2')



nameJ1.innerHTML = JSON.parse(sessionStorage.getItem('player1')).name
nameJ2.innerHTML = JSON.parse(sessionStorage.getItem('player2')).name

submit.addEventListener('click', () => {
    const user1 = {
        name: insertJ1.value,
        value: playerOption1.value
    }
    const user2 = {
        name: insertJ2.value,
        value: playerOption2.value
    }


    sessionStorage.setItem('player1', JSON.stringify(user1));
    sessionStorage.setItem('player2', JSON.stringify(user2));


    /*guardamos los datos en session storage end*/

    nameJ1.innerHTML = JSON.parse(sessionStorage.getItem('player1')).name
    nameJ2.innerHTML = JSON.parse(sessionStorage.getItem('player2')).name


    insertJ1.value = ""
    insertJ2.value = ""

})
