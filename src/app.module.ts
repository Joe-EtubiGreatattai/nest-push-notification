import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase/firebase.service';
import { NotificationController } from './notification/notification.controller';

@Module({
  controllers: [NotificationController],
  providers: [FirebaseService],
})
export class AppModule {}
