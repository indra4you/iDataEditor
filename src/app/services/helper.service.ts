import { Environment } from '@environments/environment';

import {
    NameModel
} from './data.models';

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

    public static toDisplayName(
        name: NameModel | null
    ): string | null {
        if (null === name) {
            return null;
        }

        return `${(null !== name.first && name.first.length > 0) ? name.first : ''} ${(null !== name.middle && name.middle.length > 0) ? name.middle : ''} ${(null !== name.last && name.last.length > 0) ? name.last : ''}`.trim();
    }

    public static toTrim(
        value: string
    ): string {
        return value.trim();
    }
    
    public static toTrimOrNull(
        value: string | null
    ): string | null {
        return (null !== value && value.trim().length > 0) ? value.trim() : null;
    }
}