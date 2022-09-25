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

    protected static getIsHandleValid(
    ): boolean {
        return this._handle !== null;
    }

    private static validateHandle(
    ): void {
        if (!this.getIsHandleValid()) {
            throw new FileHandleInvalidError();
        }
    }

    protected static getFileName(
    ): string {
        this.validateHandle();

        return this._handle!.name;
    }

    public static setHandle(
        handle: FileSystemFileHandle | null
    ): void {
        this._handle = handle;
    }

    protected static async read(
    ): Promise<string> {
        this.validateHandle();

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
        this.validateHandle();

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