import StatusCode, {OK} from "./StatusCode";
import PageResponse from "./PageResponse";

export default class Response<T> {

    payload: Record<string, T>;
    pagination: PageResponse;
    message: string;
    detail: string
    statusCode: number;

    constructor(payload: Record<string, T> = undefined, pagination: PageResponse = undefined, status: StatusCode = OK) {
        this.payload = payload;
        this.message = status.message;
        this.detail = status.detail;
        this.statusCode = status.status;
        this.pagination = pagination;
    }
}