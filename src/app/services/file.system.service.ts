import {
    FileHandleInvalidError,
    FileReadFailedError,
    FileWriteFailedError,
} from '@app/errors';

export class FileSystemService {
    private static readonly _fileWritableOptions: FileSystemCreateWritableOptions = {
        keepExistingData: false
    };
    
    private static _fileHandle: FileSystemFileHandle | null = null;
    
    private static setFileHandle(
        fileHandle: FileSystemFileHandle | null
    ): void {
        this._fileHandle = fileHandle;
    }

    public static get haveFileHandle(
    ): boolean {
        return this._fileHandle != null;
    }

    public static get fileName(
    ): string | null {
        if (this.haveFileHandle) {
            return this._fileHandle!.name;
        }

        return null;
    }

    public static async createFile(
    ): Promise<boolean> {
        try {
            const fileHandle: FileSystemFileHandle = await window.showSaveFilePicker();
            
            this.setFileHandle(fileHandle);

            return true;
        } catch {
        }

        return false;
    }

    public static async openFile(
    ): Promise<boolean> {
        try {
            const [fileHandle]: FileSystemFileHandle[] = await window.showOpenFilePicker();
            
            this.setFileHandle(fileHandle);

            return true;
        } catch {
        }

        return false;
    }

    public static closeFile(
    ): void {
        this.setFileHandle(null);
    }

    private static validateFileHandleAndThrow(
    ): void {
        if (!this.haveFileHandle) {
            throw new FileHandleInvalidError();
        }
    }

    public static async read(
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

    public static async write(
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
}