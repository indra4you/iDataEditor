import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import {
    DataService,
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
        if (!DataService.haveValidHandle) {
            setTimeout(() => {
                this.router.navigate([
                    '/file'
                ]);
            }, 500);
        }
    }
}