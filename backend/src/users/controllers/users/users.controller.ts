import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { user } from 'src/users/model/users.interface';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('createUser')
  createUser(@Body() userData: user): Promise<any> {
    return this.userService.createUser(userData);
  }
  @Post('login')
  login(@Body() user: any) {
    return this.userService.findUser(user);
  }
}
