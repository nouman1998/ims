import { User } from "../entity/User";
import DatasourceConfig from "../config/DatasourceConfig";
import * as crypto from 'crypto';
import { LoginRequestDto } from "../dto/request/LoginRequestDto";

export const UserRepository = DatasourceConfig.getRepository(User).extend({
    async getUserByCriteria(body:LoginRequestDto) {
        let encryptedPassword = btoa(body.password)
        let email = body.email
     return   this.createQueryBuilder('user')
         .leftJoinAndSelect('user.userType', 'userType')    
         .leftJoinAndSelect('user.saleAgent', 'saleAgent')    
         .leftJoinAndSelect('user.merchant', 'merchant')    
        .where('user.email = :email', { email })
        .andWhere('user.password = :password', { password: encryptedPassword }) 
        .getOne();
      
    }
});

