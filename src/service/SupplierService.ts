import { Supplier } from "../entity/Supplier";
import { SupplierRepository } from "../repository/SupplierRepository";
import PageResponse from "../common/response/PageResponse";
import Response from "../common/response/Response";
import { AddSupplierRequestDto } from "../dto/request/AddSupplierRequestDto";
import { UpdateSupplierRequestDto } from "../dto/request/UpdateSupplierRequestDto";
import HttpException from "../common/exception/HttpException";
import { StatusCodes } from "http-status-codes";

export default class SupplierService {
    private supplierRepository = SupplierRepository;

    

    async getSupplierByCriteria(supplierId: number, supplierName: string, category: string,paginationEnable:boolean, page: number, pageSize: number) {
        let [data, count] = await this.supplierRepository.getSupplierByCriteria(supplierId, supplierName, category,paginationEnable, page, pageSize);
        let suppliers: Supplier[] = data;
        let supplierDtos = suppliers.map(data => {
            return {
                supplierId: data.supplierId,
                supplierName: data.supplierName,
                supplierContactNumber: data.supplierContactNumber,
                supplierAddress: data.supplierAddress,
                supplierCategory: data.supplierCategory,
                
            }
        });

        let paginatedResponse = new PageResponse(pageSize, page, count);
        return new Response<any>(supplierDtos, paginatedResponse);
    }

    async addSupplier(requestBody: AddSupplierRequestDto) {
        let supplier = new Supplier;
        supplier.supplierName = requestBody.supplierName;
        supplier.supplierContactNumber = requestBody.supplierContactNumber;
        supplier.supplierCategory = requestBody.supplierCategory;
        supplier.supplierAddress = requestBody.supplierAddress;
       
        await this.supplierRepository.save(supplier);
        return new Response();
    }

    async updateSupplier(requestBody: UpdateSupplierRequestDto) {
        let supplier = await this.supplierRepository.fetchById(requestBody.supplierId);
        if (!supplier) {
            return new HttpException(StatusCodes.BAD_REQUEST, "Invalid Customer");
        }
        supplier.supplierAddress = requestBody.supplierAddress;
        supplier.supplierCategory = requestBody.supplierCategory;
        supplier.supplierName = requestBody.supplierName;
        supplier.supplierContactNumber = requestBody.supplierContactNumber;
        await this.supplierRepository.save(supplier);

        return new Response();
    }
}
