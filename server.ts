import express from "express"
import cors from "cors"
import {GameRouter} from "./routers/GameRouter"
import {GameService} from "./services/GameService";
import {AdminService} from "./services/AdminService";
import {AdminRouter} from "./routers/AdminRouter";
import {GameServiceHelpers} from "./services/GameServiceHelpers";

const gameServiceHelpers = new GameServiceHelpers();
const gameService = new GameService(gameServiceHelpers);
const gameRouter = new GameRouter(gameService);

const adminService = new AdminService();
const adminRouter = new AdminRouter(adminService);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/game/", gameRouter.getRouter());
app.use("/admin/", adminRouter.getRouter());

module.exports = app;

