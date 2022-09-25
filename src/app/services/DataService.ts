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

    public static isInDevelopment(
    ): boolean {
        return !environment.production;
    }

    public static get isHandleValid(
    ): boolean {
        return super.getIsHandleValid();
    }

    public static get fileName(
    ): string {
        if (this.isInDevelopment()) {
            return '(In Memory)'
        }

        return super.getFileName();
    }

    public static async init(
    ): Promise<void> {
        const root: RootModel = {
            eTag: HelperService.newGuid,
            lastUpdatedAt: HelperService.currentUTCDateAsString,
            agents: []
        }

        if (this.isInDevelopment()) {
            this._root = root;

            return;
        }

        await this.save(root);
    }

    protected static async getRoot(
    ): Promise<RootModel> {
        if (this.isInDevelopment()) {
            return this._root;
        }

        const root: RootModel = await this.get();

        return root;
    }

    protected static async saveRoot(
        root: RootModel
    ): Promise<void> {
        if (this.isInDevelopment()) {
            this._root = root;

            return;
        }

        await this.save(root);
    }
}