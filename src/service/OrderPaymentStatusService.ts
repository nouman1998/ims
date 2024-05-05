import { OrderPaymentStatus } from '../entity/OrderPaymentStatus';
import { OrderPaymentStatusRepository } from '../repository/OrderPaymentStatusRepository';

export class OrderPaymentStatusService {
    private orderPaymentStatusRepository = OrderPaymentStatusRepository;

    async getAllOrderPaymentStatuses(): Promise<OrderPaymentStatus[]> {
        return await this.orderPaymentStatusRepository.find();
    }
}
