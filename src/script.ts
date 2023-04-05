
const mapMethod = (array: Array<any>) => {
    const result = array.filter(arr => {
        if (arr) {
            return true
        }
        else {
            return false
        }
    })
    return result
}

const array = [0, 3, null, '', [], {}, undefined]
const result = mapMethod(array)
// console.log(result);

//array sentex of TS
let arr: (string | boolean | number)[] = []
arr.push('name', 0)
// console.log(arr)
let a: string[]
a = ['amc', 'nmc']
// console.log(a);

let d = []
d.push({}, 'nn', [], null)
// console.log(d);

let e = ['amra']
e.push('string array te sudu matro string rakha zay')
// console.log(e);

//function signature sentex on TS
let myFunc: (x: string, y: string) => void
//ekhane myFunc ekta function variable, myFunc function ti duite string paramtre ney ebng kuno kichu return kore na

let add: (a: number, b: number, c?: number) => number
add = (a: number, b: number) => {
    const d = a * b
    return d
}
// const resul = add(10, 6, 6)
// console.log(resul)
let calculate: (a: number, b: number, c: string) => number
calculate = (a: number, b: number, c: string) => {
    if (c === 'add') {
        return a + b
    }
    else if (c === 'minus') {
        return a - b
    }
    else if (c === 'multiply') {
        return a * b
    }
    else {
        return a / b
    }
}

const resul = calculate(4, 5, 'multiply')
console.log(resul);



