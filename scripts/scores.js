let lastWinner = document.getElementById('lastWinner');
lastWinner.innerHTML = sessionStorage.getItem('winner');
let scores = document.getElementById('scores')

scores.innerHTML = `${JSON.parse(sessionStorage.getItem('player1')).name}
 vs ${JSON.parse(sessionStorage.getItem('player2')).name}
  result: <br/><br/>*-${sessionStorage.getItem('winner')} is the WINNER!-*`