import { AuthDto } from '../dtos/auth.dto';
import { UserService } from '../services/user.service';
export declare class AuthController {
    private readonly userService;
    constructor(userService: UserService);
    signin(body: AuthDto): Promise<void>;
}
