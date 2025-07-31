import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
@Injectable()
export class UserService {
  create(data: UserDto) {
    // create user
  }
}
