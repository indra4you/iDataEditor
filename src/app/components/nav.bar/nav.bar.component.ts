import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
    FileSystemService,
    DataService,
} from '@app/services';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav.bar.component.html'
})
export class NavBarComponent {
    constructor(
        private readonly _router: Router
    ) {
    }

    public get haveFileHandle(
    ): boolean {
        return FileSystemService.haveFileHandle;
    }

    public get fileName(
    ): string {
        return DataService.fileName;
    }

    public async saveClicked(
    ): Promise<void> {
        if (FileSystemService.haveFileHandle) {
            return;
        }

        const result: boolean = await FileSystemService.createFile();
        if (result) {
            await DataService.saveAsRoot();
        }
    }

    public async openClicked(
    ): Promise<void> {
        const result: boolean = await FileSystemService.openFile();

        if (result) {
            this._router.navigate(['/']);
        }
    }

    public closeClicked(
    ): void {
        if (!FileSystemService.haveFileHandle) {
            return;
        }

        FileSystemService.closeFile();

        this._router.navigate(['/']);
    }
}