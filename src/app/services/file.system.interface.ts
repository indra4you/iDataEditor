import {
    RootModel
} from "@app/services";

export interface IFileSystem {
    get canChangeFileHandle(
    ): boolean;
    
    setFileHandle(
        fileHandle: FileSystemFileHandle | null
    ): void;

    get haveFileHandle(
    ): boolean;

    get fileName(
    ): string;

    init(
    ): Promise<void>;

    getRoot(
    ): Promise<RootModel>;

    saveRoot(
        root: RootModel
    ): Promise<void>;
}