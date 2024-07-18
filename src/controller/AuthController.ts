import { LoginRequestDto } from "../dto/request/LoginRequestDto";
import { Body, JsonController, Post } from "routing-controllers";
import AuthenticationService from "../service/AuthenticationService";

@JsonController('/auth')
export default class AuthenticationController {
    authenticationService= new AuthenticationService ();

    @Post('/login')
    async loginUser(@Body() requestBody: LoginRequestDto) {
        return await this.authenticationService.validateUser(requestBody);
    }
}