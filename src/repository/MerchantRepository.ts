import { Merchants } from "../entity/Merchants";
import DatasourceConfig from "../config/DatasourceConfig";

export const MerchantRepository = DatasourceConfig.getRepository(Merchants).extend({
  
    async findMerchantsByCriteria(
        merchantId: number,
        merchantName: string,
        paginationEnable:boolean,
        page: number,
        pageSize: number
    ): Promise<any> {
         let query =  this.createQueryBuilder('merchant')
            .leftJoinAndSelect('merchant.bank', 'bank')
            .leftJoinAndSelect('merchant.merchantStatus', 'merchantStatus')
            .leftJoinAndSelect('merchant.merchantCategory', 'merchantCategory')
            .leftJoinAndSelect('merchant.city', 'city')
            .where('( :merchantId IS NULL OR  merchant.merchantId = :merchantId )', { merchantId })
            .andWhere('(:merchantName IS NULL OR merchant.merchantName = :merchantName)', { merchantName })
            .orderBy('merchant.merchantId', 'DESC')

            if(paginationEnable){
                query = query.skip((page - 1) * pageSize)
                .take(pageSize)
            }

            return query.getManyAndCount();
    }
});
