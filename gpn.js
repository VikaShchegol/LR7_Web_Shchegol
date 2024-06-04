function rez() {
    var usdAmount, exchangeRate, result;
    usdAmount = parseFloat(document.getElementById('usdAmount').value);
    exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
   
    if (!isNaN(usdAmount) && !isNaN(exchangeRate)) {
        result = usdAmount * exchangeRate;
        document.getElementById('uahAmount').innerHTML = 'Сума в гривнях: ' + result.toFixed(2) + ' грн';
    } else {
        document.getElementById('uahAmount').innerHTML = 'Будь ласка, введіть числові значення у поля.';
    }
}
