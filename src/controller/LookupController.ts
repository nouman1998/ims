import { Get, JsonController } from 'routing-controllers';
import ProductService from '../service/ProductService';
import {PaymentTypeService} from '../service/PaymentTypeService';
import {UserTypeService} from '../service/UserTypeService';
import ProductCategoryService from '../service/ProductCategoryService';
import { BankService } from '../service/BankService';
import { MerchantCategoryService } from '../service/MerchantCategoryService';
import { MerchantStatusService } from '../service/MerchantStatusService';
import { OrderPaymentStatusService } from '../service/OrderPaymentStatusService';
import { OrderStatusService } from '../service/OrderStatusService';
import { OrderTypeService } from '../service/OrderTypeService';
import Response from '../common/response/Response';

@JsonController('/lookup')
export class LookupController {
    private bankService = new BankService();
    private merchantCategoryService = new MerchantCategoryService();
    private merchantStatusService = new MerchantStatusService();
    private orderPaymentStatusService = new OrderPaymentStatusService();
    private orderStatusService = new OrderStatusService();
    private orderTypeService = new OrderTypeService();
    private paymentTypeService = new PaymentTypeService();
    private userTypeService = new UserTypeService();
    private productCategoryService = new ProductCategoryService();

    @Get('/bank')
    async getBanks() {
        let response = await this.bankService.getAllBanks();
        return new Response<any>(response);
    }

    @Get('/product-category')
    async getProductCategories() {
        let response = await this.productCategoryService.getAllProductCategories();
        return new Response<any>(response);
    }

    @Get('/merchant-category')
    async getMerchantCategories() {
        let response = await this.merchantCategoryService.getAllMerchantCategories();
        return new Response<any>(response);
    }

    @Get('/merchant-status')
    async getMerchantStatuses() {
        let response = await this.merchantStatusService.getAllMerchantStatuses();
        return new Response<any>(response);
    }

    @Get('/order-payment-status')
    async getOrderPaymentStatuses() {
        let response = await this.orderPaymentStatusService.getAllOrderPaymentStatuses();
        return new Response<any>(response);
    }

    @Get('/order-status')
    async getOrderStatuses() {
        let response = await this.orderStatusService.getAllOrderStatuses();
        return new Response<any>(response);
    }

    @Get('/order-type')
    async getOrderTypes() {
        let response = await this.orderTypeService.getAllOrderTypes();
        return new Response<any>(response);
    }

    @Get('/payment-type')
    async getPaymentTypes() {
        let response = await this.paymentTypeService.getAllPaymentTypes();
        return new Response<any>(response);
    }

    @Get('/user-type')
    async getUserTypes() {
        let response = await this.userTypeService.getAllUserTypes();
        return new Response<any>(response);
    }
}
