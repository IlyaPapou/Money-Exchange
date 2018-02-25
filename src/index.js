// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let coins = {};
    let amount = 0;

    if (currency <= 0) {
        return coins
    }
    else if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    } else {
        while (currency >= 50) {
            amount++;
            coins.H = amount;
            currency = currency - 50;
        }
        amount = 0;
        while (currency >= 25) {
            amount++;
            coins.Q = amount;
            currency = currency - 25;
        }
        amount = 0;
        while (currency >= 10) {
            amount++;
            coins.D = amount;
            currency = currency - 10;
        }
        amount = 0;
        while (currency >= 5) {
            amount++;
            coins.N = amount;
            currency = currency - 5;
        }
        amount = 0;
        while (currency >= 1) {
            amount++;
            coins.P = amount;
            currency = currency - 1;
        }
        return coins;
    }
};
