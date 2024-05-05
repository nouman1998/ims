import { PaymentType } from '../entity/PaymentType';
import { PaymentTypeRepository } from '../repository/PaymentTypeRepository';

export class PaymentTypeService {
    private paymentTypeRepository = PaymentTypeRepository;

    async getAllPaymentTypes(): Promise<PaymentType[]> {
        return await this.paymentTypeRepository.find();
    }
}
