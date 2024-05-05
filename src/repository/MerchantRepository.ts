import { Merchants } from "../entity/Merchants";
import DatasourceConfig from "../config/DatasourceConfig";

export const MerchantRepository = DatasourceConfig.getRepository(Merchants).extend({
  
    async findMerchantsByCriteria(
        merchantId: number,
        merchantName: string,
        page: number,
        pageSize: number
    ): Promise<any> {
        return this.createQueryBuilder('merchant')
            // .leftJoinAndSelect('merchant.relatedEntity', 'relatedEntity')
            .where('( :merchantId IS NULL OR  merchant.merchantId = :merchantId )', { merchantId })
            .andWhere('(:merchantName IS NULL OR merchant.merchantName = :merchantName)', { merchantName })
            .orderBy('merchant.merchantId', 'DESC')
            .skip((page - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
    }
});
