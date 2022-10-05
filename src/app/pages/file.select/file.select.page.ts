import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
    DataService,
} from '@app/services';

@Component({
    templateUrl: './file.select.page.html'
})
export class FileSelectPage {
    private _filePickerOption: SaveFilePickerOptions = {
        types: [{
            description: 'iData Files',
            accept: { 'text/plain': [ '.iData' ] },
        }]
    };

    constructor(
        private readonly router: Router,
        private readonly _dataService: DataService,
    ) {
    }

    public async onNewClicked(
    ): Promise<void> {
        try {
            const fileHandle: FileSystemFileHandle = await window.showSaveFilePicker(this._filePickerOption);

            this._dataService.setFileHandle(fileHandle);
            
            await this._dataService.init();

            this.router.navigate([
                '/'
            ]);
        } catch {
        }
    }

    public async onOpenClicked(
    ): Promise<void> {
        try {
            const [fileHandle]: FileSystemFileHandle[] = await window.showOpenFilePicker({
                ...this._filePickerOption,
                multiple: false,
            });

            this._dataService.setFileHandle(fileHandle);

            this.router.navigate([
                '/'
            ]);
        } catch {
        }
    }
}