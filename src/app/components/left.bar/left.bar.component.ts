import { Component } from '@angular/core';

import {
    DataService,
} from '@app/services';

@Component({
    selector: 'app-left-bar',
    templateUrl: './left.bar.component.html',
    styleUrls: [ './left.bar.component.scss' ]
})
export class LeftBarComponent {
    public get haveValidHandle(
    ): boolean {
        return DataService.haveValidHandle;
    }
}