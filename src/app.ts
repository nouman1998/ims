import * as bodyParser from 'body-parser';
import * as express from 'express';
import {useExpressServer} from "routing-controllers";
import * as path from "path";
import {initializeSwagger} from "./config/SwaggerConfig";
import {loggerMiddleware} from "./common/middleware/LoggerMiddleware";
import AppDataSource from "./config/DatasourceConfig";
import config from "./config/Config";
import Config from "./config/Config";

export default class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.initializeDataSource()
        this.initializeMiddlewares();
        this.initializeControllers();
        initializeSwagger(this.app);
    }

    public listen() {
        this.app.listen(config.server.port, () => {
            console.log(`App listening on the port ${config.server.port}`);
        });
    }

    private initializeMiddlewares() {
        console.log(`Initializing middleware`)
        this.app.use(bodyParser.json());
        this.app.use(loggerMiddleware);
    }


    private initializeControllers() {
        console.log(`Initializing controller`)
        useExpressServer(this.app, {
            cors: true,
            routePrefix: Config.server.routingPrefix,
            middlewares: [path.join(__dirname + '/common/middleware/ErrorMiddleware.*')],
            controllers: [path.join(__dirname + '/controller/*.*')],
            defaultErrorHandler: false
        })
    }

    private initializeDataSource() {
        AppDataSource.initialize()
            .then(() => {
                console.log("Connection success with database")
            })
            .catch((error) => console.log("Error in connection with database", error))
    }
}