import { CustomerResponseDto } from "../dto/response/CustomerResponseDto";
import { Body, Get, JsonController, Post, Put, QueryParams } from "routing-controllers";
import Response from "../common/response/Response";
import SupplierService from "../service/SupplierService";
import { SupplierQueryParams } from "../dto/request/SupplierQueryParams";
import { AddSupplierRequestDto } from "../dto/request/AddSupplierRequestDto";
import { UpdateSupplierRequestDto } from "../dto/request/UpdateSupplierRequestDto";

@JsonController('/supplier')
export default class SupplierController {

    supplierService = new  SupplierService ();

    @Get()
    async getSuppliers(@QueryParams() queryParams: SupplierQueryParams): Promise<Response<CustomerResponseDto[]>> {
        return await this.supplierService.getSupplierByCriteria(queryParams.supplierId,
            queryParams.supplierName,
            queryParams.category,
            queryParams.paginationEnable,
            queryParams.page,
            queryParams.pageSize);
    }

    @Post('/add')
    async addSupplier(@Body() requestBody: AddSupplierRequestDto) {
        return await this.supplierService.addSupplier(requestBody);
    }

    @Put('/update')
    async updateCustomer(@Body() requestBody: UpdateSupplierRequestDto) {
        return await this.supplierService.updateSupplier(requestBody);
    }
}