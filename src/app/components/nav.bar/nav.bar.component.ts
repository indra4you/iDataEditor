import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
    DataService,
} from '@app/services';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav.bar.component.html'
})
export class NavBarComponent {
    constructor(
        private readonly _router: Router,
        private readonly _dataService: DataService,
    ) {
    }

    public get canChangeFileHandle(
    ): boolean {
        return this._dataService.canChangeFileHandle;
    }

    public get haveFileHandle(
    ): boolean {
        return this._dataService.haveFileHandle;
    }

    public get fileName(
    ): string {
        return this._dataService.fileName;
    }

    public switchFileClicked(
    ): void {
        this._router.navigate(['/file']);
    }

    public closeFileClicked(
    ): void {
        this._dataService.setFileHandle(null);

        this._router.navigate(['/file']);
    }
}