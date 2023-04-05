export class Teacher {
    constructor(public name: string, readonly country: string, private age: number) {

    }

    education(degree: string, uni: string) {
        console.log(`${this.name} is ${degree} from ${uni}, ${this.country}`)
    }
}