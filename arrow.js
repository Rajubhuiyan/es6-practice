// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

    const doubleIt = num => num * 2;
    const total = (num1, num2) => num1 + num2;
    const give5 = () => 5;
    const doMath = (x, y) => {
        const sum = x + y;
        const diff = x - y;
        const result = sum * diff;
        return result;
    } 

const result = total(5, 10);
const result2 = give5();
const result3 = doMath(10, 5);
console.log(result3);