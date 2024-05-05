import { OrderType } from '../entity/OrderType';
import { OrderTypeRepository } from '../repository/OrderTypeRepository';

export class OrderTypeService {
    private orderTypeRepository = OrderTypeRepository;

    async getAllOrderTypes(): Promise<OrderType[]> {
        return await this.orderTypeRepository.find();
    }
}
