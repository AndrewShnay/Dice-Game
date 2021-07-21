function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '.');
        if (roll === 1) {
            alert('Game Over!');
            break;
        }
        if (roll < 5) {
            continue;
        }
        //if (roll === 4) {
            //if (goldCoins > 0) {
                //alert('You lose 1 gold coin!');
                //goldCoins --;
                //}
                //alert('You have won '+ goldCoins + ' gold coins so far!');
                //else (continue);
        //}

        alert('Congratulations, you win ' + roll + ' gold coins!');
        goldCoins += roll;
        alert('You have won '+ goldCoins + ' gold coins so far!')
    }
        alert('No more rolls remaining. You have won a total of ' + goldCoins + ' gold coins!');
}