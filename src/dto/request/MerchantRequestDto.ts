export default class MerchantRequestDto {
    merchantName: string;
    merchantAddress: string;
    bankId: number;
    merchantStatusId: number;
    merchantCategoryId: number;
    merchantEmail?: string;
    merchantCode: string;
    cityId: number;
}