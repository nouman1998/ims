import { Bank } from '../entity/Bank';
import { BankRepository } from '../repository/BankRepository';

export class BankService {
    private bankRepository = BankRepository;

    async getAllBanks(): Promise<Bank[]> {
        return await this.bankRepository.find();
    }
}
