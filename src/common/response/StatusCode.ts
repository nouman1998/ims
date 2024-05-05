import {StatusCodes} from "http-status-codes";

export default class StatusCode {
    message: string;
    detail: string;
    status: number;
    errorCode: number;

    constructor(message: string, detail: string, errorCode: number, status: number) {
        this.message = message;
        this.detail = detail;
        this.errorCode = errorCode;
        this.status = status;
    }
}

export const CREATED: StatusCode = new StatusCode(
    "Created",
    "Operation Success",
    StatusCodes.CREATED,
    StatusCodes.CREATED);

export const OK: StatusCode = new StatusCode(
    "OK",
    "Operation Success",
    StatusCodes.OK,
    StatusCodes.OK);

export const INTERNAL_SERVER_ERROR: StatusCode = new StatusCode(
    "Error",
    "Internal Server Error",
    StatusCodes.INTERNAL_SERVER_ERROR,
    StatusCodes.INTERNAL_SERVER_ERROR);

export const BAD_REQUEST: StatusCode = new StatusCode(
    "Error",
    "Bad Request Error",
    StatusCodes.BAD_REQUEST,
    StatusCodes.BAD_REQUEST);

/* Custom Error codes:
 * Bad Request: 400X
 * Internal Server 500X */

export const INVALID_CITY_ID = new StatusCode(
    "Something went wrong, please contact to administration",
    "Invalid city id",
    4001,
    StatusCodes.BAD_REQUEST);