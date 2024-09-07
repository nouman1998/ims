import * as convict from "convict";

const conf = convict({
    env: {
        format: ['development', 'production', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    server: {
        port: {
            format: 'port',
            default: 3006,
            env: 'APP_PORT',
        },
        routingPrefix: {
            format: '*',
            default: "",
            env: 'CONTEXT_PATH',
        },
    },
    database: {
        host: {
            format: '*',
            default: '15.184.156.12',
            env: 'DB_HOSTNAME',
        },
        port: {
            format: 'port',
            default: 3306,
            env: 'DB_PORT',
        },
        name: {
            format: '*',
            default: 'installment',
            env: 'DB_NAME',
        },
        username: {
            format: '*',
            default: 'root',
            env: 'DB_USERNAME',
        },
        password: {
            format: '*',
            default: 'root',
            env: 'DB_PASSWORD',
        }
    }
});

conf.validate({allowed: 'strict'});

export default conf.getProperties();
