import { environment } from '@environments/environment';

import {
    HelperService,
} from './HelperService';

import {
    FileService,
} from './FileService'

import {
    RootModel,
} from './DataModels';

export class DataService extends FileService {
    private static readonly _jsonIndentation: string = '    ';
    private static _root: RootModel = {
        eTag: HelperService.newGuid,
        lastUpdatedAt: HelperService.currentUTCDateAsString,
        agents: []
    };

    private static async get<TJsonObject>(
    ): Promise<TJsonObject> {
        const jsonString: string = await super.read();
        const jsonObject: TJsonObject = JSON.parse(jsonString);
        return jsonObject;
    }

    private static async save<TJsonObject>(
        jsonObject: TJsonObject
    ): Promise<void> {
        const jsonString: string = JSON.stringify(jsonObject, null, this._jsonIndentation);
        await super.write(jsonString);
    }

    public static async init(
    ): Promise<void> {
        const root: RootModel = {
            eTag: HelperService.newGuid,
            lastUpdatedAt: HelperService.currentUTCDateAsString,
            agents: []
        }

        await this.save(root);
    }

    protected static async getRoot(
    ): Promise<RootModel> {
        if (!environment.production) {
            return this._root;
        }

        const root: RootModel = await this.get();

        return root;
    }

    protected static async saveRoot(
        root: RootModel
    ): Promise<void> {
        if (!environment.production) {
            this._root = root;

            return;
        }

        await this.save(root);
    }
}