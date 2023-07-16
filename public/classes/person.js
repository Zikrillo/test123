export class person {
    constructor(name, age, height, id) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.id = id;
    }
    callback() {
        return `Persons name ${this.name}, person ${this.age} years old. Persons height ${this.height}. Persons id ${this.id}`;
    }
}
