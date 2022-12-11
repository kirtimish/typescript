var num1element = document.getElementById('num1');
var num2element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
var numResults = [];
var textResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultobj) {
    console.log(resultobj.val);
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', function () {
    var num1 = num1element.value;
    var num2 = num2element.value;
    var result = add(+num1, +num2);
    numResults.push(result);
    var stringresult = add(num1, num2);
    textResults.push(stringresult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('worked');
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result.split('w'));
});
