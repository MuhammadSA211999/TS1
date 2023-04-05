
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

// const resul = calculate(4, 5, 'multiply')
// console.log(resul);

let userDetails: (id: number, userInfo: { name: string, age: number }) => number
userDetails = (id: number, userInfo: { name: string, age: number }) => {
    const result = id + userInfo.age
    return result
}
//classws in typescript 
class Player {
    name: string
    country: string
    age: number
    constructor(n: string, c: string, a: number) {
        this.name = n
        this.country = c
        this.age = a
    }
    //Player function/Method 
    education(school: string, college: string, uni: string) {
        console.log(`${school} from ${college} is ${uni}`);
    }
    playing() {
        console.log(`${this.name} from ${this.country} is ${this.age}`);
    }
}
const moenAli = new Player('Moeen Ali', 'Pak-Eng', 36)
const msDhoni = new Player('MS Dhoni', 'India', 40)
msDhoni.age = 60
// console.log(msDhoni)
// const dhoni = msDhoni.playing()
// const dhoniEduca = msDhoni.education('cannpur hng', 'cannpur govt', 'IIT')
// console.log(dhoniEduca)
//make array of this Player class 
const players: Player[] = []
// players.push({}) //failed
players.push(msDhoni)
players.push(moenAli)
// console.log(players)

//class with access modifier
class Teacher {
    //    public name: string
    //    readonly country: string
    //    private age: number
    constructor(public name: string,
        readonly country: string,
        private age: number) {

    }
    //Player function/Method 
    education(school: string, college: string, uni: string) {
        console.log(`${school} from ${college} is ${uni}`);
    }
    playing() {
        console.log(`${this.name} from ${this.country} is ${this.age}`);
    }
}

const maksud = new Teacher('maksud', 'bangladesh', 37)
maksud.name = 'Taher' //nmaksud.name is accesabl and will modified, because it's a public property of class Teacher 
// but age and country are not accessable, because it is readonly and private
