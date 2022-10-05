import { IFileSystem } from './file.system.interface';

import {
    FileHandleInvalidError,
    FileReadFailedError,
    FileWriteFailedError,
} from '@app/errors';

import {
    HelperService,
    RootModel,
} from '@app/services';

export class FileSystem implements IFileSystem {
    private readonly _fileWritableOptions: FileSystemCreateWritableOptions = {
        keepExistingData: false
    };
    private readonly _jsonIndentation: string = '    ';
    
    private _fileHandle: FileSystemFileHandle | null = null;

    public get canChangeFileHandle(
    ): boolean {
        return true;
    }
    
    public setFileHandle(
        fileHandle: FileSystemFileHandle | null
    ): void {
        this._fileHandle = fileHandle;
    }

    public get haveFileHandle(
    ): boolean {
        return this._fileHandle != null;
    }

    public get fileName(
    ): string {
        return this._fileHandle?.name!;
    }

    private validateFileHandleAndThrow(
    ): void {
        if (!this.haveFileHandle) {
            throw new FileHandleInvalidError();
        }
    }

    private async read(
    ): Promise<string> {
        this.validateFileHandleAndThrow();

        try {
            const file: File = await this._fileHandle!.getFile();
            const content: string = await file.text();
            return content;
        } catch (error) {
            console.error(error);

            throw new FileReadFailedError();
        }
    }

    private async write(
        value: string
    ): Promise<void> {
        this.validateFileHandleAndThrow();

        try {
            const writableStream: FileSystemWritableFileStream =
                await this._fileHandle!.createWritable(this._fileWritableOptions);
            await writableStream.write(value);
            await writableStream.close();
        } catch (error) {
            console.error(error);

            throw new FileWriteFailedError();
        }
    }

    private async get<TJsonObject>(
    ): Promise<TJsonObject> {
        const jsonString: string = await this.read();
        const jsonObject: TJsonObject = JSON.parse(jsonString);
        return jsonObject;
    }

    private async save<TJsonObject>(
        jsonObject: TJsonObject
    ): Promise<void> {
        const jsonString: string = JSON.stringify(jsonObject, null, this._jsonIndentation);
        await this.write(jsonString);
    }

    public async init(
    ): Promise<void> {
        const root: RootModel = {
            eTag: HelperService.newGuid,
            lastUpdatedAt: HelperService.currentUTCDateAsString,
            agents: []
        };

        await this.save(root);
    }
    
    public async getRoot(
    ): Promise<RootModel> {
        const root: RootModel = await this.get();
        return root;
    }

    public async saveRoot(
        root: RootModel
    ): Promise<void> {
        await this.save(root);
    }
}