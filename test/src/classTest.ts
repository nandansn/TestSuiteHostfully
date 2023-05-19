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
            url:url,
            width: this.width
        });
        
    }
}

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

let sanity = new UITest('Login', 1, 'passed')
sanity.logTest()