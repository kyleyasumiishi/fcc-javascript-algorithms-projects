/*
 * Returns an object with a status key and a change key.
 * @param {Number} price - Purchase price.
 * @param {Number} cash - Payment.
 * @param {Array} cid - Cash-in-drawer is a 2D array listing the available currency.
 */
function checkCashRegister(price, cash, cid) {
    const changeDue = cash - price;
    let changeRemaining = changeDue;
    let change = [];
    let status;
    let totalCash = 0;
    cid.forEach(([denom, cash]) => {
        totalCash += cash;
    });
    totalCash = Number(totalCash.toFixed(2));
    
    for (let i = cid.length - 1; i >= 0; i--) {
        let denom = cid[i][0];
        let denomAmount = currencyInfo[denom];
        let totalAmount = cid[i][1];
        let changeGiven = 0;
        while (changeRemaining >= denomAmount && totalAmount > 0) {
            changeRemaining = Number((changeRemaining - denomAmount).toFixed(2));
            changeGiven = Number((changeGiven + denomAmount).toFixed(2));
            totalAmount = Number((totalAmount - denomAmount).toFixed(2));
        }
        if (changeGiven > 0) {
            change.push([denom, changeGiven]);
        }
    }
    
    if (totalCash < changeDue || changeRemaining > 0) {
        status = "INSUFFICIENT_FUNDS";
        change = [];
    } else if (totalCash === changeDue) {
        status = "CLOSED";
        change = cid;
    } else {
        status = "OPEN";
    }
    
    return {
        status: status,
        change: change
    };
}

const currencyInfo = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5, 
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
};


