import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    HandleGaurdOperator,
} from '@app/services';

import {
    NotFoundPage,
    HomePage,
    SelectFilePage,
    AgentsPage,
} from '@app/pages';

const routes: Routes = [
    { path: 'home', component: HomePage },

    // TODO: Add Guard to check file handle
    { path: 'file', component: SelectFilePage },

    { path: 'agents', component: AgentsPage, canActivate: [ HandleGaurdOperator ] },

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: '**', component: NotFoundPage }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}