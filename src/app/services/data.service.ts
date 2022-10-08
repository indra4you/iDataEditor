import { FileSystemService } from './file.system.service';

import {
    HelperService,
    RootModel,
} from '@app/services';

export class DataService {
    private static readonly _jsonIndentation: string = '    ';

    private static _root: RootModel = {
        eTag: HelperService.newGuid,
        lastUpdatedAt: HelperService.currentUTCDateAsString,
        termDeposits: [],
    };

    private static async get<TJsonObject>(
    ): Promise<TJsonObject> {
        const jsonString: string = await FileSystemService.read();
        const jsonObject: TJsonObject = JSON.parse(jsonString);
        return jsonObject;
    }

    private static async save<TJsonObject>(
        jsonObject: TJsonObject
    ): Promise<void> {
        const jsonString: string = JSON.stringify(jsonObject, null, this._jsonIndentation);
        await FileSystemService.write(jsonString);
    }

    public static get fileName(
    ): string {
        return FileSystemService.fileName ?? '( In Memory )';
    }
    
    public static async getRoot(
    ): Promise<RootModel> {
        if (FileSystemService.haveFileHandle) {
            this._root = await this.get();
        }
        
        return this._root;
    }

    public static async saveRoot(
        root: RootModel
    ): Promise<void> {
        this._root = root;

        if (FileSystemService.haveFileHandle) {
            await this.save(root);
        }
    }

    public static async saveAsRoot(
    ): Promise<void> {
        await this.saveRoot(this._root);
    }
}