import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsService {
  sendSms(email: any) {
    const mail = email;
    return mail;
  }
}
