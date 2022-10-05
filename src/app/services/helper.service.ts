import { Environment } from '@environments/environment';

export class HelperService {
    public static get supportsFileSystemFileHandle(
    ): boolean {
        return "showOpenFilePicker" in window;
    }

    public static get isProductionEnvironment(
    ): boolean {
        return Environment.production;
    }
    
    public static get newGuid(
    ): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0;
            var v = c == 'x' ? r : ((r & 0x3) | 0x8);
            
            return v.toString(16);
          });
    }

    public static get currentUTCDateAsString(
    ): string {
        return new Date().toUTCString();
    }
}