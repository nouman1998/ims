import { MerchantStatus } from '../entity/MerchantStatus';
import { MerchantStatusRepository } from '../repository/MerchantStatusRepository';

export class MerchantStatusService {
    private merchantStatusRepository = MerchantStatusRepository;

    async getAllMerchantStatuses(): Promise<MerchantStatus[]> {
        return await this.merchantStatusRepository.find();
    }
}
