"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPhone = void 0;
class IPhone {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
    makeCall(to) {
        return "success";
    }
    sendMessage(to, message) {
        return "success";
    }
}
exports.IPhone = IPhone;
