function calc (func, param1, param2) {
    return func(param1, param2)
}

let sum = (param$1, param$2) => param$1 + param$2;
let diff = (param$1, param$2) => param$1 - param$2;
let mult = (param$1, param$2) => param$1 * param$2;
let div = (param$1, param$2) => param$1 / param$2;
let expo = (param$1, param$2) => param$1 ** param$2;
let rem = (param$1, param$2) => param$1 % param$2;

console.log(calc (sum, 6, 3 ));
console.log(calc (diff, 6, 3 ));
console.log(calc (mult, 6, 3 ));
console.log(calc (div, 6, 3 ));
console.log(calc (expo, 6, 3 ));
console.log(calc (rem, 6, 3 ));
