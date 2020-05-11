let randomDamage = Math.floor(Math.random() * 11);
const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return randNum == 0 ? opt1 : opt2;
}
const attackPlayer = function(health){
    return health - randomDamage;
}
const logHealth = function(player, health) {
    console.log(`${player} Health: ${health}`);
}
const logDeath = function(winner, loser) {
    console.log(`${winner} defeated ${loser}`);
}
const isDead = function(health) {
    return health <= 0 ? true : false; 
}
const fight = function (player1, player2, player1Health, player2Health){
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker == player1){
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health)
            if(isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        } else if (attacker == player2){
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health)
            if(isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}
fight ("Michael Corn", "Jason Schemmel", 100, 100);