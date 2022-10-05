import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import {
    HelperService,
} from '@app/services';

@Injectable({
    providedIn: 'root'
})
export class BrowserSupportedGuard implements CanActivate {
    constructor(
        private readonly _router: Router
    ) {
    }

    public canActivate(
        _: ActivatedRouteSnapshot,
        __: RouterStateSnapshot
    ): boolean {
        if (HelperService.supportsFileSystemFileHandle) {
            this._router.navigate(['']);
        }

        return true;
    }
}