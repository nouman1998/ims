import { Get, JsonController, QueryParams } from 'routing-controllers';
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
import CityService from '../service/CityService';
import { ProductLookupQueryParams, ProductQueryParams } from '../dto/request/ProductQueryParams';
import { LocationLookupQueryParams } from '../dto/request/LocationQueryParams';
import LocationService from '../service/LocationService';
import ProductLocationService from '../service/ProductLocationService';

@JsonController('/lookup')
export class LookupController {
    private bankService = new BankService();
    private cityService = new CityService();
    private merchantCategoryService = new MerchantCategoryService();
    private merchantStatusService = new MerchantStatusService();
    private orderPaymentStatusService = new OrderPaymentStatusService();
    private orderStatusService = new OrderStatusService();
    private orderTypeService = new OrderTypeService();
    private paymentTypeService = new PaymentTypeService();
    private userTypeService = new UserTypeService();
    private productCategoryService = new ProductCategoryService();
    private productService = new ProductService();
    private locationService = new LocationService();

    @Get('/bank')
    async getBanks() {
        let response = await this.bankService.getAllBanks();
        return new Response<any>(response);
    }

    @Get('/city')
    async getCities() {
        let response = await this.cityService.getAllCities();
        return new Response<any>(response);
    }

    @Get('/product')
    async getProduct(@QueryParams() queryParams: ProductLookupQueryParams) {
        return await this.productService.getAllProduct(
            queryParams.productId,
            queryParams.productName,
            queryParams.sku,
            queryParams.merchantId,
        );
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

    @Get('/location')
    async getLocations(@QueryParams() queryParams: LocationLookupQueryParams) {
        return await this.locationService.getAllLocations(
            queryParams.merchantId,
        );
    }

    @Get('/user-type')
    async getUserTypes() {
        let response = await this.userTypeService.getAllUserTypes();
        return new Response<any>(response);
    }
}
