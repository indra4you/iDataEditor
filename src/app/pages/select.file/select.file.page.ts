import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
    DataService,
} from '@app/services';

@Component({
    templateUrl: './select.file.page.html'
})
export class SelectFilePage {
    private filePickerOption: SaveFilePickerOptions = {
        types: [{
            description: 'iData Files',
            accept: { 'text/plain': [ '.iData' ] },
        }]
    };

    constructor(
        private readonly router: Router
    ) {
    }

    public async onNewClicked(
    ): Promise<void> {
        try {
            const fileHandle: FileSystemFileHandle = await window.showSaveFilePicker(this.filePickerOption);

            DataService.setHandle(fileHandle);
            
            await DataService.init();

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
                ...this.filePickerOption,
                multiple: false,
            });

            DataService.setHandle(fileHandle);

            this.router.navigate([
                '/'
            ]);
        } catch {
        }
    }
}