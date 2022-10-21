import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

import { FileSystemService } from './file.system.service';

@Injectable()
export class FileSystemGuard implements CanActivate, CanActivateChild {
    constructor(
        private readonly _router: Router
    ) {
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute, state);
    }

    canActivate(
        _: ActivatedRouteSnapshot,
        __: RouterStateSnapshot): boolean {
        
        if (FileSystemService.haveFileHandle) {
            return true;
        }

        this._router.navigate(['']);

        return false;
    }
}