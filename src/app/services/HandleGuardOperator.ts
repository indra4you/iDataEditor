import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

import {
    DataService,
} from './DataService';

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
        return DataService.isInDevelopment() || DataService.isHandleValid;
    }
}