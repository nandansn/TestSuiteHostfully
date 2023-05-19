let names = ["nanda","kumar"]

let mixedArray  = [1,2,'nanda','kumar',true,true,true,true,true,true,true,true]

let mixes: (string | number | boolean)[]

mixes = [...mixedArray]

console.log(mixes);


let person = {
    name:'jon',
    age: 36,
    address: {
        city:'erode'
    }
}

let student: {
    name:string,
    age:number
}

let a : (boolean | string | number| null )

a = null

console.log(typeof a);

let sum = (a: any,b: any) => a + b


let mul: Function 



mul = (a:number, b:number, c?:number) : number => {return a + b + (c||1)}

console.log(`%c result: ${mul(1,2)}`,{color: 'green'});

mul = (a:number, b:number, c:number = 10) : number => {return a * b * c }

console.log(`result: ${mul(1,2)}`);


type person = {name:string, age:number, email:string, birth:Date}


let createPerson:Function

createPerson = (name:string,age:number,email:string) : person => {
    return {
        name:name,
        age:age,
        email:email,
        birth: new Date()
    }
} 

console.log(createPerson('name', 10, 'email'));

// function signature

let add:(a:number, b:number) => number

type userObject = {name:string, age:number, email:string}

let displayDetails : (user: userObject) => void

displayDetails = (user: userObject) => {
    console.log(user);
    
}

displayDetails({name: 'name', age: 12, email: 'email'})




