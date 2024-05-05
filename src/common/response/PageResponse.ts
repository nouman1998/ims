export default class PageResponse {

    pageSize: number;
    page: number;
    totalPages: number;
    total: number
    sortBy: string
    direction: string;

    constructor(pageSize: number, page: number, total: number, sortBy: string = undefined, direction: string = undefined) {
        this.pageSize = pageSize;
        this.page = page;
        this.totalPages = Math.ceil(total / pageSize);
        this.total = total;
        this.sortBy = sortBy;
        this.direction = direction;
    }
}