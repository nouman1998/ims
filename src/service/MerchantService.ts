import { MerchantRepository } from "../repository/MerchantRepository";
import Response from "../common/response/Response";
import PageResponse from "../common/response/PageResponse";
import MerchantRequestDto from "../dto/request/MerchantRequestDto";
import { UpdateMerchantRequestDto } from "../dto/request/UpdateMerchantRequestDto";
import HttpException from "../common/exception/HttpException";
import { BAD_REQUEST } from "../common/response/StatusCode";
import { Bank } from "../entity/Bank";
import { City } from "../entity/City";
import { MerchantCategory } from "../entity/MerchantCategory";
import { MerchantStatus } from "../entity/MerchantStatus";
import { Merchants } from "../entity/Merchants";

export default class MerchantService {

    private merchantRepository = MerchantRepository;;

    async getMerchantsByCriteria(
        merchantId: number,
        merchantName: string,
        paginationEnable:boolean,
        page: number,
        pageSize: number
    ): Promise<Response<any>> {
        let [data, total] = await this.merchantRepository.findMerchantsByCriteria(merchantId, merchantName,paginationEnable, page, pageSize);
        let dtos = data.map((merchant: Merchants) => ({
            merchantId: merchant?.merchantId,
            merchantName: merchant?.merchantName,
            merchantAddress: merchant?.merchantAddress,
            bankId: merchant?.bank?.bankId,
            bankName: merchant?.bank?.bankName,
            merchantStatusId: merchant?.merchantStatus?.merchantStatusId,
            merchantStatus: merchant?.merchantStatus?.merchantStatus,
            merchantCategoryId: merchant?.merchantCategory?.merchantCategoryId,
            merchantCategory: merchant?.merchantCategory?.merchantCategoryName,
            merchantEmail: merchant?.merchantEmail,
            merchantCode: merchant?.merchantCode,
            cityId: merchant?.city?.cityId,
            cityName: merchant?.city?.cityName
        }));

        let pagination: PageResponse = new PageResponse(pageSize, page, total);
        return new Response<any>(dtos, pagination);
    }

    async addMerchant(merchantDto: MerchantRequestDto): Promise<Response<any>> {
        const merchant = this.merchantRepository.create(merchantDto);
        await this.merchantRepository.save(merchant);
        return new Response();
    }

    async updateMerchant(updateMerchantDto: UpdateMerchantRequestDto, merchantId: number): Promise<Response<any>> {
        let merchant = await this.merchantRepository.findOneById(merchantId);
        if (!merchant) {
            throw new HttpException(BAD_REQUEST.status, "Invalid Merchant Id", BAD_REQUEST.detail, BAD_REQUEST.errorCode)
        }
        merchant.bank = new Bank(updateMerchantDto.bankId);
        merchant.city = new City(updateMerchantDto.cityId);
        merchant.merchantAddress = updateMerchantDto.merchantAddress;
        merchant.merchantCategory = new MerchantCategory(updateMerchantDto.merchantCategoryId);
        merchant.merchantCode = updateMerchantDto.merchantCode;
        merchant.merchantEmail = updateMerchantDto.merchantEmail;
        merchant.merchantName = updateMerchantDto.merchantName;
        merchant.merchantStatus = new MerchantStatus(updateMerchantDto.merchantStatusId);
        await this.merchantRepository.save(merchant);
        return new Response();
    }
}
