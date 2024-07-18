import { CustomerResponseDto } from "../dto/response/CustomerResponseDto";
import { CustomerQueryParams } from "../dto/request/CustomerQueryParams";
import { Body, Get, JsonController, Post, Put, QueryParams } from "routing-controllers";
import CustomerService from "../service/CustomerService";
import Response from "../common/response/Response";
import { AddCustomerRequestDto } from "../dto/request/AddCustomerRequestDto";
import { UpdateCustomerRequestDto } from "../dto/request/UpdateCustomerRequestDto";

@JsonController('/customer')
export default class CustomerController {

    customerService = new  CustomerService ();

    @Get()
    async getCustomers(@QueryParams() queryParams: CustomerQueryParams): Promise<Response<CustomerResponseDto[]>> {
        console
        return await this.customerService.getCustomerByCriteria(queryParams.customerId,
            queryParams.customerName,
            queryParams.cnic,
            queryParams.paginationEnable,
            queryParams.page,
            queryParams.pageSize);
    }

    @Post('/add')
    async addCustomer(@Body() requestBody: AddCustomerRequestDto) {
        return await this.customerService.addCustomer(requestBody);
    }

    @Put('/update')
    async updateCustomer(@Body() requestBody: UpdateCustomerRequestDto) {
        return await this.customerService.updateCustomer(requestBody);
    }
}