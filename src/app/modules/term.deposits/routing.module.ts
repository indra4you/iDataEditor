import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    TermDepositListPage,
} from './pages';

const routes: Routes = [
    { path: '', component: TermDepositListPage },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TermDepositsRoutingModule {
}