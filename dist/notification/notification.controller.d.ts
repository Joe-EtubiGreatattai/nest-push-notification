import { FirebaseService } from '../firebase/firebase.service';
export declare class NotificationController {
    private readonly firebaseService;
    constructor(firebaseService: FirebaseService);
    sendPushNotification(body: {
        token: string;
        title: string;
        message: string;
    }): Promise<{
        success: boolean;
        response: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        response?: undefined;
    }>;
}
