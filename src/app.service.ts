import { Injectable, Inject } from '@nestjs/common';
const sgMail = require('@sendgrid/mail');

@Injectable()
export class AppService {
  constructor(
  ) { }

  async sendMail(): Promise<any> {
    const msg = {
      to: 'test@example.com',
      from: 'test@example.com',
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    await sgMail.send(msg);
  }
}