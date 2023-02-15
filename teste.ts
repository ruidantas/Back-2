let number1: number;
let text: string;
let bol: boolean;
let data: Date;

text = "teste";

number1 = 2


let person1: Person;

person1 = {
    age: 22,
    name: "Rui",
    code: function () {
        return "Coding";
    }
}

person1.age.toFixed

console.log(number1);

interface person {               // interface pode extender mas não pode implementar 
    name: string;
    age: number;
    code: () => string;
}

type Person  = {            // type não pode implements nem extends
    name: string;
    age: number;
    code: () => string;
}

function test(person: Person): string {
    return person.name;
  }
  test(person1);
