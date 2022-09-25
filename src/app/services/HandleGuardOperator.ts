import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from '@environments/environment';

import {
    FileService,
} from './FileService';

@Injectable({
    providedIn: 'root'
})
export class HandleGaurdOperator implements CanActivate, CanActivateChild {
    constructor(
        private readonly router: Router
    ) {
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        return this.canActivate(childRoute, state);
    }

    canActivate(
        _: ActivatedRouteSnapshot,
        __: RouterStateSnapshot
    ): boolean {
        if (!environment.production) {
            return true;
        }
        
        return FileService.haveValidHandle;
    }
}