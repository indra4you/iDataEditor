import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

import {
    DataService,
} from '@app/services';

@Injectable({
    providedIn: 'root'
})
export class FileHandleGuard implements CanActivate, CanActivateChild {
    constructor(
        private readonly _router: Router,
        private readonly _dataService: DataService,
    ) {
    }

    public canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        return this.canActivate(childRoute, state);
    }

    public canActivate(
        _: ActivatedRouteSnapshot,
        __: RouterStateSnapshot
    ): boolean {
        if (!this._dataService.haveFileHandle) {
            this._router.navigate(['file']);
        }

        return true;
    }
}