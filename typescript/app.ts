const num1element = document.getElementById('num1') as HTMLInputElement;
const num2element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button');
const numResults: Array<number> = [];
const textResults: string[] = [];

type NumOrString = number | string;
type Result = {val: number; timestamp: Date}

interface ResultObj {
    val : number;
    timestamp: Date;
}

function add(num1: number | string, num2: number | string) {
  if(typeof num1 === 'number' && typeof num2 === 'number'){
    return num1 + num2;
  } else if (typeof num1 === 'string' && typeof num2 === 'string'){
    return num1 + ' ' + num2;
  }
  return +num1 + +num2;
}

function printResult(resultobj: { val: number; timestamp: Date}){
    console.log(resultobj.val);
}

buttonElement?.addEventListener('click', () => {
    const num1 = num1element.value
    const num2 = num2element.value
    const result = add(+num1, +num2);
    numResults.push(result as number)
    const stringresult = add(num1,num2)
    textResults.push(stringresult as string)
    printResult({val: result as number, timestamp: new Date()})
    console.log(numResults, textResults);
})

const myPromise = new Promise<string>((resolve,reject) => {
    setTimeout(() => {
        resolve('worked');
    }, 1000)
});

myPromise.then((result) => {
    console.log(result.split('w'));
})