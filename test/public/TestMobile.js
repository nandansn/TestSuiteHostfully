"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SmartMobile_1 = require("./SmartMobile");
let iphone = new SmartMobile_1.IPhone('nanda', 123456);
iphone.makeCall(456789);
iphone.sendMessage(90000, 'Hello');
