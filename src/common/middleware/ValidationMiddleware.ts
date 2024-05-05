import {plainToInstance} from 'class-transformer';
import {validate, ValidationError} from 'class-validator';
import {RequestHandler} from 'express';
import HttpException from '../exception/HttpException';


export function validationMiddleware<T>(type: any, skipMissingProperties = false): RequestHandler {
    console.log("validate middleware called")
    return (req, res, next) => {
        validate(plainToInstance(type, req.body), {skipMissingProperties})
            .then((errors: ValidationError[]) => {
                if (errors.length > 0) {
                    const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
                    next(new HttpException(400, message, "BadRequestError", null));
                } else {
                    next();
                }
            });
    };
}
