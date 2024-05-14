import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class EmailService {
  sendemail(email: any) {
    const mail = email;
    return mail;
  }
}
