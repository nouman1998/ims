import PageResponse from "../common/response/PageResponse";
import { Customer } from "../entity/Customer";
import { CustomerRepository } from "../repository/CustomerRepository";
import Response from "../common/response/Response";
import { AddCustomerRequestDto } from "dto/request/AddCustomerRequestDto";
import { City } from "../entity/City";
import { Merchants } from "../entity/Merchants";
import { UpdateCustomerRequestDto } from "dto/request/UpdateCustomerRequestDto";
import HttpException from "../common/exception/HttpException";
import { StatusCodes } from "http-status-codes";

export default class CustomerService {

    private customerRepository = CustomerRepository;

    async createCustomer(customerName: string, customerPhone: string): Promise<Customer> {
        let customer = new Customer();
        customer.customerName = customerName;
        customer.customerPhone = customerPhone;
        return this.customerRepository.save(customer);
    }

    async getCustomerByCriteria(customerId: number, customerName: string, cnic: string,paginationEnable:boolean, page: number, pageSize: number) {
        let [data, count] = await this.customerRepository.getCustomerByCriteria(customerId, customerName, cnic,paginationEnable, page, pageSize);
        let customers: Customer[] = data;
        let customerDtos = customers.map(data => {
            return {
                customerId: data.customerId,
                customerName: data.customerName,
                cityId: data.city?.cityId,
                cityName: data.city?.cityName,
                merchantId: data.merchant?.merchantId,
                merchantName: data.merchant?.merchantName,
                cnic: data.cnic,
                customerAddress: data.address,
                profession: data.profession,
                customerPhone: data.customerPhone
            }
        });

        let paginatedResponse = new PageResponse(pageSize, page, count);
        return new Response<any>(customerDtos, paginatedResponse);
    }

    async addCustomer(requestBody: AddCustomerRequestDto) {
        let customer = new Customer;
        customer.address = requestBody.address;
        customer.city = new City(requestBody.cityId);
        customer.cnic = requestBody.cnic;
        customer.customerName = requestBody.customerName;
        customer.customerPhone = requestBody.customerPhone;
        customer.merchant = new Merchants(requestBody.merchantId);
        customer.profession = requestBody.profession;
        await this.customerRepository.save(customer);
        return new Response();
    }

    async updateCustomer(requestBody: UpdateCustomerRequestDto) {
        let customer = await this.customerRepository.findOneById(requestBody.customerId);
        if (customer == null) {
            throw new HttpException(StatusCodes.BAD_REQUEST, "Invalid Customer");
        }
        customer.address = requestBody.address;
        customer.city = new City(requestBody.cityId);
        customer.cnic = requestBody.cnic;
        customer.customerName = requestBody.customerName;
        customer.customerPhone = requestBody.customerPhone;
        customer.profession = requestBody.profession;
        await this.customerRepository.save(customer);
        return new Response();
    }

}
