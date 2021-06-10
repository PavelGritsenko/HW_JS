function calc (func, param1, param2) {
    return func(param1, param2)
}

console.log(calc ((param$1, param$2) => param$1 + param$2, 6, 3 ))
console.log(calc ((param$1, param$2) => param$1 - param$2, 6, 3 ))
console.log(calc ((param$1, param$2) => param$1 * param$2, 6, 3 ))
console.log(calc ((param$1, param$2) => param$1 / param$2, 6, 3 ))
console.log(calc ((param$1, param$2) => param$1 ** param$2, 6, 3 ))
console.log(calc ((param$1, param$2) => param$1 % param$2, 6, 3 ))

