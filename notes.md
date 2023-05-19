## Typescript
    - npm needed
        - so install the node
    - npm install -g typescript

### Compiling TypeScript

- create a new TypeScript with extension .ts
- need to compile the typescript file

```javascript
tsc test.ts test.js
tsc test.js -w // with watch flag, when there is a change in the file, it will automatically compiled
```

### type basics
 - in typescript no need to specify the type explicitly, based on the the values of the variables, type will be inferred
```javascript

let sum = (a:number, b:number) => a+b

```

- types:
    string, number, boolean, object, function
    - any, any type of value can be stored
  - union types:
    let a : (string | number | boolean)
    a = undefined allowed,
    when you run with option -strictNullChecks, then above code will fail during compilation

- dynamic types:
    - any

### workflow and tsconfig:
- to create typescript project, or create compiler configuration use the following command in the folder when you want to create the typescript project

```bash
tsc --init 
```

-- outDir
-- rootDir
-- include path for compilation

### function basics

- type:
    **Funciton**
    ```javascript
    let sum: Function 

    sum(a:number, b:number) : number => a + b

    // optional paramtere, c

    let mul: Function 
    mul = (a:number, b:number, c?:number) : number => {return a + b + (c||1)}

    // default value for the parameter, c
    mul = (a:number, b:number, c:number = 10) : number => {return a + b + c }

    ```

- type:
    **aliases**
    
    ```javascript
    type stringOrNumber = string | number
    ```

### Function signature

    - declaring the function with parameters and return type

    ```javascript
    let sum: (a:number, b:number) => number
    ```

### DOmm and Typecasting 
    - how to get the dom element properties in the typescript
    - we have to use 'as'

    ```javascript

    let form = document.querySelector('form.input-details') as HTMLFormElement

    form.action

    ```

### class, instance methods and variables

```javascript
class Browser {
    name:string;
    version:string;
    width:number = 100;
    

    constructor(name:string, version:string) {
        this.name = name;
        this.version = version;
    }

    open(url:string) {
        console.log({
            name:this.name,
            version:this.version,
            url:url
        });
        
    }
}
```

- you need to initialize the instance variables otherwise you well get an error.

### acces modifiers

- public, 
    - is a default behaviour
    - appllicable to property and the methods
    - methods and properties, can be accessed inside or outside the class
    - public properties can be modified
- private
    - appllicable to property and the methods
    - private properties can be accessed inside the class only
    - private properties can be modified inside the class
- read only
    - appllicable to property only
    - read only can be accessed inside the class and outside of the class
    - updated properties is not allowed

also no need to declare the instance variables outside the constructor, constructor parameters can be used as instance variables


```javascript
class UITest {
    constructor(public name:string, readonly priority:number, private status:string) {

    }

    logTest() {
        console.log({
            name:this.name,
            priority:this.priority,
            staus: this.status
        });
        
    }

}
```

## modules

- use 'es2015' for the module in the tsconfig.json
    - you can export and import
    - when you using in production you need to bundle it with webpack, otherwise multiple request will sent for the module export and import.


## interfaces

- provides structure
- cant be initialized
- public,


## generics

- allows us to create re-usable blocks of code for different objects
 <T> capture the type and you can assign the T where ever you want, may be in method paramter

 