let insertJ1 = document.getElementById('insertName1');
let insertJ2 = document.getElementById('insertName2');
const submit = document.getElementById('Submit')
const playerOption1 = document.getElementById('playerOption1')
const cpuOption1 = document.getElementById('cpuOption1')
const playerOption2 = document.getElementById('playerOption2')
const cpuOption2 = document.getElementById('cpuOption2')
var user1 = {
    name: insertJ1.innerHTML,
    value: playerOption1.value
}
var user2 = {
    name: insertJ2.innerHTML,
    value: playerOption2.value
}



nameJ1.innerHTML = sessionStorage.getItem('player1');
nameJ2.innerHTML = sessionStorage.getItem('player2');

submit.addEventListener('click', () => {

   
    sessionStorage.setItem('player1', JSON.stringify(user1)).name;
    sessionStorage.setItem('player2', JSON.stringify(user2)).name;
  

    /*guardamos los datos en session storage end*/
    
    nameJ1.innerHTML = JSON.parse(sessionStorage.getItem('player1')).name
    nameJ2.innerHTML = JSON.parse(sessionStorage.getItem('player2')).name
    
    insertJ1.value = ""
    insertJ2.value = ""

})
