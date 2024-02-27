const farenheitBtn = document.getElementById("toFarenheit");
const celciusBtn = document.getElementById("toCelcius");
const userNum = document.getElementById("textBox");
const result = document.getElementById("result");
let temp;


function convert() {
    if(farenheitBtn.checked) {
        temp = Number(userNum.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    } else if(celciusBtn.checked) {
        temp = Number(userNum.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "C";
    } else {
        result.textContent = "Select a conversion option"
    }
}
