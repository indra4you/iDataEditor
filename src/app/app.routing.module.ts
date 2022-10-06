import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    NotFoundPage,
    DashboardPage,
    MastersAgentsPage,
    MastersFamilyMembersPage,
} from '@app/pages';

const routes: Routes = [
    { path: 'dashboard', component: DashboardPage },

    {
        path: 'masters',
        children: [
            { path: 'agents', component: MastersAgentsPage },

            { path: 'family.members', component: MastersFamilyMembersPage },

            { path: '**', component: NotFoundPage },
        ]
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