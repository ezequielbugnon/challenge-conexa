"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./database/db"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const post_routes_1 = __importDefault(require("./routes/post.routes"));
const photo_routes_1 = __importDefault(require("./routes/photo.routes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(cors_1.default());
    }
    routes() {
        this.app.use('/', user_routes_1.default);
        this.app.use('/', post_routes_1.default);
        this.app.use('/', photo_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => console.log('Server is listenning on port', this.app.get('port')));
    }
}
const server = new Server();
server.start();
db_1.default();
//# sourceMappingURL=server.js.map