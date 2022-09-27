import { Component } from '@angular/core';

import {
    HelperService,
    DataService,
} from '@app/services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public get showFileName(
    ): boolean {
        return HelperService.haveFileSystemFileHandleFeature && (DataService.isInDevelopment() || DataService.isHandleValid);
    }

    public get fileName(
    ): string {
        return DataService.fileName;
    }
}