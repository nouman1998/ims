import { OrderMaster } from "../entity/OrderMaster";
import DatasourceConfig from "../config/DatasourceConfig";

export const OrderMasterRepository = DatasourceConfig.getRepository(OrderMaster).extend({
  
    async findOrderMastersByCriteria(merchantId: number,orderMasterId: number,orderRef: string,orderTypeId: number,saleAgentId: number,supplierId: number, page: number, pageSize: number): Promise<any> {
        return this.createQueryBuilder('orderMaster')
            .leftJoinAndSelect('orderMaster.orderType', 'orderType')
            .leftJoinAndSelect('orderMaster.customer', 'customer')
            .leftJoinAndSelect('orderMaster.orderPaymentStatus', 'orderPaymentStatus')
            .leftJoinAndSelect('orderMaster.supplier', 'supplier')
            .leftJoinAndSelect('orderMaster.merchant', 'merchant')
            .leftJoinAndSelect('orderMaster.installmentPlan', 'installmentPlan')
            .leftJoinAndSelect('orderMaster.saleAgent', 'saleAgent')
            .where('( :orderMasterId IS NULL OR  orderMaster.orderMasterId = :orderMasterId )', { orderMasterId })
            .andWhere('( :orderTypeId IS NULL OR  orderType.orderTypeId = :orderTypeId )', { orderTypeId})
            .andWhere('( :supplierId IS NULL OR  supplier.supplierId = :supplierId )', { supplierId})
            .andWhere('( :orderRef IS NULL OR  orderMaster.orderRef = :orderRef )', { orderRef})
            .andWhere('( :saleAgentId IS NULL OR  saleAgent.saleAgentId = :saleAgentId )', { saleAgentId})
            .andWhere('( :merchantId IS NULL OR  merchant.merchantId = :merchantId )', { merchantId})
            .orderBy('orderMaster.orderMasterId', 'DESC')
            .skip((page - 1) * pageSize)
            .take(pageSize)
            .getManyAndCount();
    }

});
