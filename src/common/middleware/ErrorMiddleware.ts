import {ExpressErrorMiddlewareInterface, Middleware} from "routing-controllers";
import {NextFunction, Request, Response} from 'express';
import HttpException from "../exception/HttpException";
import {logger} from "../../config/LoggerConfig";

@Middleware({type: 'after'})
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
    error(error: HttpException, request: Request, response: Response, next: NextFunction) {
        response
            .status(error.httpCode)
            .send(new HttpException(error.httpCode, resolverErrorMessage(error.message, error.detail), resolverErrorDetail(error.message, error.detail), error.errorCode));
        logger.error(error.stack)
        return next();
    }
}

function resolverErrorMessage(message: string, detail: string): string {
    if (detail == undefined) {
        return undefined
    }
    return message;
}

function resolverErrorDetail(message: string, detail: string): string {
    if (detail == undefined) {
        return message
    }
    return detail;
}