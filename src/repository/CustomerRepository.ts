import { Customer } from "../entity/Customer";
import DatasourceConfig from "../config/DatasourceConfig";

export const CustomerRepository = DatasourceConfig.getRepository(Customer).extend({
    async getCustomerByCriteria(customerId: number, customerName: string, cnic: string, page: number, pageSize: number) {
        return this.createQueryBuilder('customer')
        .leftJoinAndSelect('customer.city', 'city')
        .leftJoinAndSelect('customer.merchant', 'merchant')
        .where('( :customerId IS NULL OR  customer.customerId = :customerId )', { customerId })
        .andWhere('(:customerName IS NULL OR customer.customerName = :customerName)', { customerName })
        .andWhere('(:cnic IS NULL OR customer.cnic = :cnic)', { cnic })
        .orderBy('customer.customerName', 'ASC')
        .skip((page - 1) * pageSize)
        .take(pageSize)
        .getManyAndCount();
    }
});

