"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.generate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const generate = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, config_1.CONFIG_SECRET, {
        expiresIn: 60 * 60 * 24
    });
    return token;
};
exports.generate = generate;
const verify = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('x-access');
    if (!token) {
        return res.status(401).send({ auth: false, token: 'No token provided' });
    }
    const decoded = yield jsonwebtoken_1.default.verify(token, config_1.CONFIG_SECRET);
    req.userId = decoded._id;
    next();
});
exports.verify = verify;
//# sourceMappingURL=jwt.js.map