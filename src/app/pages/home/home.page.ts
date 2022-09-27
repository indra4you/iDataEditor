import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import {
    DataService,
    HelperService,
} from '@app/services';

@Component({
    templateUrl: './home.page.html'
})
export class HomePage implements AfterViewInit {
    constructor(
        private readonly router: Router,
    ) {
    }

    ngAfterViewInit(
    ): void {
        if (!HelperService.haveFileSystemFileHandleFeature) {
            setTimeout(() => {
                this.router.navigate([
                    '/notSupported'
                ]);
            }, 500);

            return;
        }

        if (DataService.isInDevelopment() || DataService.isHandleValid) {
            return;
        }

        setTimeout(() => {
            this.router.navigate([
                '/file'
            ]);
        }, 500);
    }
}