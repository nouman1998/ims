import {getMetadataArgsStorage} from "routing-controllers";
import {routingControllersToSpec} from "routing-controllers-openapi";
import * as path from "path";
import * as swaggerUI from "swagger-ui-express";
import {Application} from "express";
import {validationMetadatasToSchemas} from 'class-validator-jsonschema'
import Config from "./Config";

export function initializeSwagger(app: Application): void {

    console.log(`Initializing swagger`)
    const schemas: Record<string, any> = validationMetadatasToSchemas({
        refPointerPrefix: '#/components/schemas/',
    })
    const storage = getMetadataArgsStorage()
    const swaggerDoc = routingControllersToSpec(storage, {
        controllers: [path.join(__dirname + '/controller/*.ts')],
        // routePrefix: Config.server.routingPrefix,
    }, {
        components: {schemas},
        info: {
            description: 'Boilerplate microservice for read operations',
            title: 'Boilerplate microservice',
            version: '1.0.0',
        },
    })

    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
}