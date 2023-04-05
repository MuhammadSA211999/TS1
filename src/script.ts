
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
