import { UserType } from '../entity/UserType';
import { UserTypeRepository } from '../repository/UserTypeRepository';

export class UserTypeService {
    private userTypeRepository = UserTypeRepository;

    async getAllUserTypes(): Promise<UserType[]> {
        return await this.userTypeRepository.find();
    }
}
