import { Supplier } from "../entity/Supplier";
import DatasourceConfig from "../config/DatasourceConfig";

export const SupplierRepository = DatasourceConfig.getRepository(Supplier).extend({
   async fetchById(supplierId: number) {
        return this.createQueryBuilder("supplier")
            .where("(:supplierId IS NULL OR supplier.supplierId = :supplierId)", { supplierId })
            .getOne()
    },
   
    async getSupplierByCriteria(supplierId: number, supplierName: string, category: string,paginationEnable:boolean, page: number, pageSize: number) {
        let query = this.createQueryBuilder('supplier')
    //    .leftJoinAndSelect('supplier.category', 'category')
       .where('( :supplierId IS NULL OR  supplier.supplierId = :supplierId )', { supplierId })
       .andWhere('(:supplierName IS NULL OR supplier.supplierName = :supplierName)', { supplierName })
    //    .andWhere('(:categoryId IS NULL OR category.categoryId = :categoryId)', { categoryId })
       .orderBy('supplier.supplierName', 'ASC')

       if(paginationEnable){
           query = query.skip((page - 1) * pageSize)
           .take(pageSize)
       }
       return query.getManyAndCount();
   }
});

