import { Component } from '@angular/core';

import {
    HelperService,
    DataService,
} from '@app/services';

@Component({
    selector: 'app-left-bar',
    templateUrl: './left.bar.component.html',
    styleUrls: [ './left.bar.component.scss' ]
})
export class LeftBarComponent {
    public get showNavItems(
    ): boolean {
        return HelperService.haveFileSystemFileHandleFeature && (DataService.isInDevelopment() || DataService.isHandleValid);
    }
}