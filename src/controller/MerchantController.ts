import { Body, Get, JsonController, Param, Post, Put, QueryParams } from 'routing-controllers';
import MerchantService from '../service/MerchantService';
import { MerchantQueryParams } from '../dto/request/MerchantQueryParams';
import Response from '../common/response/Response';
import { UpdateMerchantRequestDto } from '../dto/request/UpdateMerchantRequestDto';
import MerchantRequestDto from '../dto/request/MerchantRequestDto';
import { MerchantResponseDto } from '../dto/response/MerchantResponseDto';

@JsonController('/merchants')
export default class MerchantController {
    merchantService = new MerchantService();

    @Get()
    async getMerchants(@QueryParams() queryParams: MerchantQueryParams): Promise<Response<MerchantResponseDto[]>> {
        return await this.merchantService.getMerchantsByCriteria(queryParams.merchantId,
            queryParams.merchantName,
            queryParams.paginationEnable,
            queryParams.page,
            queryParams.pageSize);
    }

    @Post("/add")
    async addMerchant(@Body({ validate: true }) merchantDto: MerchantRequestDto): Promise<Response<any>> {
        return this.merchantService.addMerchant(merchantDto);
    }

    @Put('/update/:merchantId')
    async updateMerchant(
        @Param('merchantId') merchantId: number,
        @Body() updateMerchantDto: UpdateMerchantRequestDto,
    ): Promise<Response<any>> {
        return this.merchantService.updateMerchant(updateMerchantDto, merchantId);
    }
}
