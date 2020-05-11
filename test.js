let randomDamage = Math.floor(Math.random() * 11);
const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return randNum == 0 ? opt1 : opt2;
}
let attackPlayer = function(health) {
  return health - randomDamage;
};
let logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};
let logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};
let isDead = (health) => {
  return health <= 0;
};
function fight(player1, player2, player1Health, player2Health) {
    var attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health === attackPlayer(player2Health);
      logHealth(player2, player2Health);
      isDead(player2Health);
      if (`${isDead}` === true) {
        logDeath(player1, player2);
      }
    } else {
      player1Health === attackPlayer(player1Health);
      logHealth(player1, player1Health);
      isDead(player1Health);
      if (`${isDead}` === true) {
        logDeath(player2, player1);
    }    
      }
}
fight("Patrick", "Alison",100,100);