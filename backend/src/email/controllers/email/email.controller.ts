import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from 'src/email/services/email/email.service';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post('sendEmail')
  async sendEmail(@Body() data: any): Promise<any> {
    return this.emailService.sendemail(data.mailContent);
  }
}
