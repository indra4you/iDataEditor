import { Component } from '@angular/core';

import {
    DataService,
} from '@app/services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public get fileName(
    ): string {
        return DataService.fileName;
    }
}