// jshint esnext:true

function addMoney(money){
    let balance = 0;
    for(let i = 0; i < money.length; i++)
    {
        balance+= money[i];
    }
}