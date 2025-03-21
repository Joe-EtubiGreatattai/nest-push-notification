import { Controller, Post, Body } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Post('send')
  async sendPushNotification(@Body() body: { token: string; title: string; message: string }) {
    return await this.firebaseService.sendNotification(body.token, body.title, body.message);
  }
}
