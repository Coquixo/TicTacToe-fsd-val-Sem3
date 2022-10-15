let insertJ1 = document.getElementById('insertName1');
let insertJ2 = document.getElementById('insertName2');
const submit = document.getElementById('Submit')
let playerValue1 = document.getElementById('playerValue1')
let playerValue2 = document.getElementById('playerValue2')





submit.addEventListener('click', () => {
    const user1 = {
        name: insertJ1.value,
        value: playerValue1.value
    }
    const user2 = {
        name: insertJ2.value,
        value: playerValue2.value
    }



    sessionStorage.setItem('player1', JSON.stringify(user1));
    sessionStorage.setItem('player2', JSON.stringify(user2));
    sessionStorage.setItem('winner', "NoOne");



    /*guardamos los datos en session storage end*/

    nameJ1.innerHTML = JSON.parse(sessionStorage.getItem('player1')).name
    nameJ2.innerHTML = JSON.parse(sessionStorage.getItem('player2')).name


    insertJ1.value = ""
    insertJ2.value = ""

})
nameJ1.innerHTML = JSON.parse(sessionStorage.getItem('player1')).name
nameJ2.innerHTML = JSON.parse(sessionStorage.getItem('player2')).name