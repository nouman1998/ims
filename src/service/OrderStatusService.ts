import { OrderStatus } from '../entity/OrderStatus';
import { OrderStatusRepository } from '../repository/OrderStatusRepository';

export class OrderStatusService {
    private orderStatusRepository = OrderStatusRepository;

    async getAllOrderStatuses(): Promise<OrderStatus[]> {
        return await this.orderStatusRepository.find();
    }
}
