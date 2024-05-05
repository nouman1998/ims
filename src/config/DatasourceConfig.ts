import {DataSource} from "typeorm";
import config from "./Config";
import * as path from "path";


const AppDataSource = new DataSource({
    type: "mysql",
    host: config.database.host,
    port: config.database.port,
    username: config.database.username,
    password: config.database.password,
    database: config.database.name,
    entities: [path.join(__dirname + '/../entity/*.*')],
    migrations: [path.join(__dirname + '/../common/migration/*.*')],
    migrationsRun: false,
    synchronize: false,
    logging: config.env == 'development',
    connectTimeout: 20000,
    acquireTimeout: 20000
})
export default AppDataSource;