import { environment } from '@environments/environment';

import {
    FileHandleInvalidError,
    FileReadFailedError,
    FileWriteFailedError,
} from '@app/errors';

export class FileService {
    private static _handle: FileSystemFileHandle | null = null;
    private static readonly _fileWritableOptions: FileSystemCreateWritableOptions = {
        keepExistingData: false
    }

    protected static get isHandleNull(
    ): boolean {
        if (!environment.production) {
            return false;
        }

        return this._handle === null;
    }

    public static get haveValidHandle(
    ): boolean {
        return !this.isHandleNull;
    }

    public static get fileName(
    ): string {
        if (environment.production) {
            return this._handle!.name;
        }

        return '(In Memory)';
    }

    public static setHandle(
        handle: FileSystemFileHandle | null
    ): void {
        this._handle = handle;
    }

    protected static async read(
    ): Promise<string> {
        if (this.isHandleNull) {
            throw new FileHandleInvalidError();
        }

        try {
            const file: File = await this._handle!.getFile();
            const content: string = await file.text();
            return content;
        } catch (error) {
            console.error(error);

            throw new FileReadFailedError();
        }
    }

    protected static async write(
        value: string
    ): Promise<void> {
        if (this.isHandleNull) {
            throw new FileHandleInvalidError();
        }

        try {
            const writableStream: FileSystemWritableFileStream = await this._handle!.createWritable(this._fileWritableOptions);
            await writableStream.write(value);
            await writableStream.close();
        } catch (error) {
            console.error(error);

            throw new FileWriteFailedError();
        }
    }
}