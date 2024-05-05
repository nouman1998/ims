// OrderMasterService.ts

import { OrderMaster } from "../entity/OrderMaster";
import { OrderMasterRepository } from "../repository/OrderMasterRepository";
import Response from "../common/response/Response";
import PageResponse from "../common/response/PageResponse";
import { OrderMasterRequestDto } from "../dto/request/OrderMasterRequestDto";
import { UpdateOrderMasterRequestDto } from "../dto/request/UpdateOrderMasterRequestDto";
import HttpException from "../common/exception/HttpException";
import { BAD_REQUEST } from "../common/response/StatusCode";
import CustomerService from "./CustomerService";
import { InstallmentPlan } from "../entity/InstallmentPlan";
import { Merchants } from "../entity/Merchants";
import { OrderPaymentStatus } from "../entity/OrderPaymentStatus";
import { OrderType } from "../entity/OrderType";
import { SaleAgent } from "../entity/SaleAgent";
import { Supplier } from "../entity/Supplier";
import { OrderDetailRepository } from "../repository/OrderDetailRepository";
import { Products } from "../entity/Products";

export default class OrderMasterService {

    private orderMasterRepository = OrderMasterRepository;
    private customerSevice = new CustomerService();
    private orderDetailRepository = OrderDetailRepository;

    async getOrderMastersByCriteria(merchantId: number, orderMasterId: number, orderRef: string, orderTypeId: number, saleAgentId: number, supplierId: number, page: number, pageSize: number): Promise<Response<any>> {
        let [data, total] = await this.orderMasterRepository.findOrderMastersByCriteria(merchantId, orderMasterId, orderRef, orderTypeId, saleAgentId, supplierId, page, pageSize);
        let dtos = data.map((orderMaster: OrderMaster) => ({
            orderMasterId: orderMaster.orderMasterId,
            invoiceAmount: orderMaster.invoiceAmount,
            orderTypeId: orderMaster.orderType.orderTypeId,
            customerId: orderMaster.customer.customerId,
            orderPaymentStatusId: orderMaster.orderPaymentStatus.orderPaymentStatusId,
            supplierId: orderMaster.supplier.supplierId,
            orderRef: orderMaster.orderRef,
            installmentPlanId: orderMaster.installmentPlan.installmentPlanId,
            netAmount: orderMaster.netAmount,
            saleAgentId: orderMaster.saleAgent.saleAgentId,
        }));

        let pagination: PageResponse = new PageResponse(pageSize, page, total);
        return new Response<any>(dtos, pagination);
    }

    async addOrderMaster(orderMasterDto: OrderMasterRequestDto): Promise<Response<any>> {
        let orderMaster = new OrderMaster();
        orderMaster.customer = await this.customerSevice.createCustomer(orderMasterDto.customerName, orderMasterDto.customerPhone);
        orderMaster.installmentPlan = orderMasterDto.installmentPlanId ? new InstallmentPlan(orderMasterDto.installmentPlanId) : null;
        orderMaster.invoiceAmount = orderMasterDto.invoiceAmount;
        orderMaster.merchant = new Merchants(orderMasterDto.merchantId);
        orderMaster.netAmount = orderMasterDto.netAmount;
        orderMaster.orderPaymentStatus = new OrderPaymentStatus(orderMasterDto.orderPaymentStatusId);
        orderMaster.orderRef = orderMasterDto.orderRef;
        orderMaster.orderType = new OrderType(orderMasterDto.orderTypeId);
        orderMaster.saleAgent = orderMasterDto.saleAgentId ? new SaleAgent(orderMasterDto.saleAgentId) : null;
        orderMaster.supplier = orderMasterDto.supplierId ? new Supplier(orderMasterDto.supplierId) : null;
        orderMaster = await this.orderMasterRepository.save(orderMaster);
        if (orderMasterDto.orderDetails) {
            for (const detail of orderMasterDto.orderDetails) {
                await this.orderDetailRepository.create({
                    orderMaster: orderMaster,
                    product: new Products(detail.productId),
                    quantity: detail.quantity
                });
            }
        }

        return new Response();
    }

    async updateOrderMaster(updateOrderMasterDto: UpdateOrderMasterRequestDto, orderMasterId: number): Promise<Response<any>> {
        let orderMaster = await this.orderMasterRepository.findOneById(orderMasterId);
        if (!orderMaster) {
            throw new HttpException(BAD_REQUEST.status, "Invalid Order Master Id", BAD_REQUEST.detail, BAD_REQUEST.errorCode)
        }
        orderMaster.invoiceAmount = updateOrderMasterDto.invoiceAmount;
        orderMaster.netAmount = updateOrderMasterDto.netAmount;
        orderMaster.orderPaymentStatus = new OrderPaymentStatus(updateOrderMasterDto.orderPaymentStatusId);
        orderMaster.orderRef = updateOrderMasterDto.orderRef;
        orderMaster.orderType = new OrderType(updateOrderMasterDto.orderTypeId);
        orderMaster.saleAgent = updateOrderMasterDto.saleAgentId ? new SaleAgent(updateOrderMasterDto.saleAgentId) : null;
        orderMaster.supplier = updateOrderMasterDto.supplierId ? new Supplier(updateOrderMasterDto.supplierId) : null;
        orderMaster = await this.orderMasterRepository.save(orderMaster);

        if (updateOrderMasterDto.orderDetails) {
            this.orderDetailRepository.delete({orderMaster: orderMaster});
            for (const detail of updateOrderMasterDto.orderDetails) {
                await this.orderDetailRepository.create({
                    orderMaster: orderMaster,
                    product: new Products(detail.productId),
                    quantity: detail.quantity
                });
            }
        }

        return new Response();
    }
}
