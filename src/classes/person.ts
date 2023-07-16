import { callback } from "../interface/callback.js";

export class person implements callback {
    constructor(
       public name:any,
       public age:number,
       public height:number,
       public id:number
    ){}
   callback() {
       return `Persons name ${this.name}, person ${this.age} years old. Persons height ${this.height}. Persons id ${this.id}`
   }
}