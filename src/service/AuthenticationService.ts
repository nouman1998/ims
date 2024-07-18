import { UserRepository } from "../repository/UserRepository";
import { User } from "../entity/User";
import { LoginRequestDto } from "../dto/request/LoginRequestDto";

export default class AuthenticationService {
    private userRepository = UserRepository;

    async validateUser(body:LoginRequestDto) {
        const user:User = await this.userRepository.getUserByCriteria(body)
       if(user){
        return {
            userId:user.userId,
            fullName:user.fullName,
            email:user.email,
            password:user.password,
            userType:user.userType?.userType,
            userTypeId:user.userType?.userTypeId,
            saleAgent:user.saleAgent?.agentName,
            saleAgentId:user.saleAgent?.saleAgentId,
            merchantId:user.merchant?.merchantId,
            merchantName:user.merchant?.merchantName,
        };
       }else{
        return new Response();

       }
    }
}