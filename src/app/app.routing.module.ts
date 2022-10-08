import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    NotFoundPage,
    DashboardPage,
} from '@app/pages';

const routes: Routes = [
    { path: 'dashboard', component: DashboardPage },

    {
        path: 'term.deposits',
        loadChildren: () => import('@app/modules/term.deposits/module').then(m => m.TermDepositsModule),
    },

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    { path: '**', component: NotFoundPage },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}