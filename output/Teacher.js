export class Teacher {
    constructor(name, country, age) {
        this.name = name;
        this.country = country;
        this.age = age;
    }
    education(degree, uni) {
        console.log(`${this.name} is ${degree} from ${uni}, ${this.country}`);
    }
}
