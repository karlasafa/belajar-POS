import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private UserService : UserService,
        private jwtService : JwtService
    ){

    }
    async cekUser(username, password){
        let user = await this.UserService.findUsername(username)
        if(user){
            const valid = this.UserService.compare(password, user.password)
            if(valid){
                return user
            }
            else{
                throw new BadRequestException({message:'Password salah'})
            }
        }
        else{
            throw new BadRequestException({message: 'Username tidak ditemukan'})
        }

    }
    
    generateToken(user:any){
        let dataToken = {id:user.id}
        let token = this.jwtService.sign(dataToken)
        return {token:token}
    }
}
