import { MerchantCategory } from '../entity/MerchantCategory';
import { MerchantCategoryRepository } from '../repository/MerchantCategoryRepository';

export class MerchantCategoryService {
    private merchantCategoryRepository = MerchantCategoryRepository;

    async getAllMerchantCategories(): Promise<MerchantCategory[]> {
        return await this.merchantCategoryRepository.find();
    }
}
