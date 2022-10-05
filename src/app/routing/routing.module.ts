import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    NotFoundPage,
    NotSupportedPage,
    DashboardPage,
    FileSelectPage,
    MastersAgentsPage,
} from '@app/pages';

import { BrowserSupportedGuard } from './browser.supported.guard';
import { BrowserNotSupportedGuard } from './browser.not.supported.guard';
import { FileHandleGuard } from './file.handle.guard';

const routes: Routes = [
    { path: 'dashboard', component: DashboardPage, canActivate: [ BrowserNotSupportedGuard, FileHandleGuard ] },

    { path: 'file', component: FileSelectPage, canActivate: [ BrowserNotSupportedGuard ] },

    {
        path: 'masters',
        children: [
            { path: 'agents', component: MastersAgentsPage },

            { path: '**', component: NotFoundPage },
        ],
        canActivate: [ BrowserNotSupportedGuard, FileHandleGuard ]
    },

    { path: 'not-supported', component: NotSupportedPage, canActivate: [ BrowserSupportedGuard ] },

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    { path: '**', component: NotFoundPage },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class RoutingModule {
}