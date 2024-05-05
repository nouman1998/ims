export class UpdateMerchantRequestDto {
    merchantName: string;
    merchantAddress: string;
    bankId: number;
    merchantStatusId: number;
    merchantCategoryId: number;
    merchantEmail?: string;
    merchantCode: string;
    cityId: number;
}