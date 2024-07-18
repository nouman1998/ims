import { Customer } from "../entity/Customer";
import DatasourceConfig from "../config/DatasourceConfig";

export const CustomerRepository = DatasourceConfig.getRepository(Customer).extend({
    async getCustomerByCriteria(customerId: number, customerName: string, cnic: string,paginationEnable:boolean, page: number, pageSize: number) {
         let query = this.createQueryBuilder('customer')
        .leftJoinAndSelect('customer.city', 'city')
        .leftJoinAndSelect('customer.merchant', 'merchant')
        .where('( :customerId IS NULL OR  customer.customerId = :customerId )', { customerId })
        .andWhere('(:customerName IS NULL OR customer.customerName = :customerName)', { customerName })
        .andWhere('(:cnic IS NULL OR customer.cnic = :cnic)', { cnic })
        .orderBy('customer.customerName', 'ASC')

        if(paginationEnable){
            query = query.skip((page - 1) * pageSize)
            .take(pageSize)
        }
        return query.getManyAndCount();
    }
});

