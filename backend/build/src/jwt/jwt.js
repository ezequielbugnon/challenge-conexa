"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generate = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, {
        expiresIn: '5h'
    });
    return token;
};
exports.generate = generate;
