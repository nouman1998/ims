// OrderMasterController.ts

import { Body, Get, JsonController, Param, Post, Put, QueryParams } from 'routing-controllers';
import OrderMasterService from '../service/OrderMasterService';
import { OrderMasterRequestDto } from '../dto/request/OrderMasterRequestDto';
import { OrderMasterQueryParams } from '../dto/request/OrderMasterQueryParams';
import Response from '../common/response/Response';
import { UpdateOrderMasterRequestDto } from '../dto/request/UpdateOrderMasterRequestDto';

@JsonController('/order-masters')
export default class OrderMasterController {
    orderMasterService = new OrderMasterService();

    @Get()
    async getOrderMasters(@QueryParams() queryParams: OrderMasterQueryParams): Promise<Response<any>> {
        return await this.orderMasterService.getOrderMastersByCriteria(
            queryParams.merchantId,
            queryParams.orderMasterId,
            queryParams.orderRef,
            queryParams.orderTypeId,
            queryParams.saleAgentId,
            queryParams.supplierId,
            queryParams.page,
            queryParams.pageSize
        );
    }

    @Post("/add")
    async addOrderMaster(@Body({ validate: true }) orderMasterDto: OrderMasterRequestDto): Promise<Response<any>> {
        return this.orderMasterService.addOrderMaster(orderMasterDto);
    }

    @Put('/update/:orderId')
    async updateOrderMaster(
        @Param('orderId') orderId: number,
        @Body() updateOrderMasterDto: UpdateOrderMasterRequestDto,
    ): Promise<Response<any>> {
        return this.orderMasterService.updateOrderMaster(updateOrderMasterDto, orderId);
    }
}
