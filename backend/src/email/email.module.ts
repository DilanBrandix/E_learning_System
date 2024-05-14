import { Module } from '@nestjs/common';
import { EmailService } from './services/email/email.service';
import { EmailController } from './controllers/email/email.controller';

@Module({
  providers: [EmailService],
  controllers: [EmailController]
})
export class EmailModule {}
