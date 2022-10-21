import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FileSystemGuard } from '@app/services';

import {
    TermDepositListPage,
    TermDepositFormPage,
} from './pages';

const routes: Routes = [
    { path: '', component: TermDepositListPage },

    { path: 'add', component: TermDepositFormPage },

    { path: 'edit/:id', component: TermDepositFormPage, canActivate: [FileSystemGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TermDepositsRoutingModule {
}