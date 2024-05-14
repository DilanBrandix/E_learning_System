import { Controller, Post, Body } from '@nestjs/common';
import { SmsService } from 'src/sms/services/sms/sms.service';

@Controller('sms')
export class SmsController {
  constructor(private smsService: SmsService) {}

  @Post('sendSMS')
  async sendEmail(@Body() data: any): Promise<any> {
    return this.smsService.sendSms(data.smsContent);
  }
}
