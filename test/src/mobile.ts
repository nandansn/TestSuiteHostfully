interface Mobile {
    name:string;
    number:number;
    makeCall: (to:number) => string
    sendMessage: (to:number, message:string) => string 
}