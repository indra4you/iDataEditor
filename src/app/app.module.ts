import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '@app/app.routing.module';
import { AppComponent } from '@app/app.component';

import {
    NavBarComponent,
} from '@app/components';

import {
    NotFoundPage,
    DashboardPage,
    MastersAgentsPage,
    MastersAgentCreateComponent,
    MastersAgentUpdateComponent,
    MastersAgentDeleteComponent,
    MastersFamilyMembersPage,
    MastersFamilyMemberCreateComponent,
    MastersFamilyMemberUpdateComponent,
    MastersFamilyMemberDeleteComponent,
} from '@app/pages';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        NotFoundPage,
        DashboardPage,
        MastersAgentsPage,
        MastersAgentCreateComponent,
        MastersAgentUpdateComponent,
        MastersAgentDeleteComponent,
        MastersFamilyMembersPage,
        MastersFamilyMemberCreateComponent,
        MastersFamilyMemberUpdateComponent,
        MastersFamilyMemberDeleteComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}