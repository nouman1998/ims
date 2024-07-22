
import { Location } from "../entity/Location";
import DatasourceConfig from "../config/DatasourceConfig";

export const LocationRepository = DatasourceConfig.getRepository(Location).extend({
    async findAllLocationsByCriteria(
        merchantId: number,
    ): Promise<any> {
        return this.createQueryBuilder('location')
        .leftJoinAndSelect('location.merchant', 'merchant')
        .where('(merchant.merchantId = :merchantId)', { merchantId })
        .orderBy('location.locationId', 'DESC')
        .getMany();
    }
});

