import { Module } from '@nestjs/common';
import { SmsController } from './controllers/sms/sms.controller';
import { SmsService } from './services/sms/sms.service';

@Module({
  controllers: [SmsController],
  providers: [SmsService]
})
export class SmsModule {}
