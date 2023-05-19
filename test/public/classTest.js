"use strict";
class Browser {
    constructor(name, version) {
        this.width = 100;
        this.name = name;
        this.version = version;
    }
    open(url) {
        console.log({
            name: this.name,
            version: this.version,
            url: url,
            width: this.width
        });
    }
}
class UITest {
    constructor(name, priority, status) {
        this.name = name;
        this.priority = priority;
        this.status = status;
    }
    logTest() {
        console.log({
            name: this.name,
            priority: this.priority,
            staus: this.status
        });
    }
}
let sanity = new UITest('Login', 1, 'passed');
sanity.logTest();
