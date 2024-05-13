import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersEntity } from 'src/users/model/users.entity';
import { user } from 'src/users/model/users.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectDataSource('test')
    private testDataSource: DataSource,
    private jwtservice: JwtService,
  ) {}

  async findUser(user: any): Promise<any> {
    const username: any = user.username;
    try {
      const userFromDb = await this.testDataSource.query(`SELECT  [id]
      ,[username]
      ,[password]
      ,[fullName]
      ,[userRole]
      ,[accessType]
      ,[created_at]
  FROM [test].[dbo].[Users] where username = '${username}'`);

      if (userFromDb[0] === undefined) {
        return { message: 'User is not available', error: true };
      }
      if (userFromDb[0].password !== user.password) {
        return { message: 'Invalid password', error: true };
      }

      const userToken = await this.jwtservice.signAsync({
        id: userFromDb[0].id.toString(),
        username: userFromDb[0].username,
        userRole: userFromDb[0].userRole,
        fullName: userFromDb[0].fullName,
        accessType: userFromDb[0].accessType,
      });

      return { userToken, error: false };
    } catch (e) {
      return e.message;
    }
  }

  async createUser(users: user) {
    const user = await this.testDataSource.manager
      .getRepository(UsersEntity)
      .save(users);

    return user;
  }
}
