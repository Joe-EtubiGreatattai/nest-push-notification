export declare class FirebaseService {
    private firebaseApp;
    constructor();
    sendNotification(token: string, title: string, body: string): Promise<{
        success: boolean;
        response: string;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        response?: undefined;
    }>;
}
