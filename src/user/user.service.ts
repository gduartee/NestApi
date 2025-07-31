/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { CreateUserDto, UserDto } from './dto/user.dto';
import { PrismaService } from 'src/db/prisma.service';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto): Promise<UserDto> {
    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }
}
