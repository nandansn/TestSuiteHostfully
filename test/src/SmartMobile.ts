export class IPhone implements Mobile {
    name: string;
    number: number;

    constructor(name:string, number:number) {
        this.name = name;
        this.number = number;
    }
    
    makeCall(to:number) {
        return "success" 
    }

    sendMessage (to: number, message: string) {
        return "success"
    }
    
}