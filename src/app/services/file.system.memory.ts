import { IFileSystem } from './file.system.interface';

import {
    InvalidOperationError,
} from '@app/errors';

import {
    HelperService,
    RootModel,
} from '@app/services';

export class FileSystem implements IFileSystem {
    public get canChangeFileHandle(
    ): boolean {
        return false;
    }
    
    private _root: RootModel = {
        eTag: HelperService.newGuid,
        lastUpdatedAt: HelperService.currentUTCDateAsString,
        agents: []
    };

    public setFileHandle(
        _: FileSystemFileHandle | null
    ): void {
        throw new InvalidOperationError();
    }

    public get haveFileHandle(
    ): boolean {
        return true;
    }

    public get fileName(
    ): string {
        return "( In Memory )";
    }    

    public async init(
    ): Promise<void> {
        throw new InvalidOperationError();
    }

    public async getRoot(
    ): Promise<RootModel> {
        return this._root;
    }

    public async saveRoot(
        root: RootModel
    ): Promise<void> {
        this._root = root;
    }
}