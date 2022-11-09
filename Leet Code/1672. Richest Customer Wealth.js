/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    for(let i = 0; i < accounts.length; i++) {
        accounts[i] = accounts[i].reduce((acc, val) => acc + val, 0)
    }
    return Math.max(...accounts)
};
