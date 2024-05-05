export class MerchantResponseDto {
    merchantId: number;
    merchantName: string;
    merchantAddress: string;
    bankId: number;
    bankName: string;
    merchantStatusId: number;
    merchantStatus: string;
    merchantCategoryId: number;
    merchantCategory: string;
    merchantEmail?: string;
    merchantCode: string;
    cityId: number;
    cityName: string;
}