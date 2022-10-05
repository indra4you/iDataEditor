import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from '@app/routing';
import { AppComponent } from '@app/app.component';

import {
    NavBarComponent,
} from '@app/components';

import {
    NotFoundPage,
    NotSupportedPage,
    FileSelectPage,
    DashboardPage,
    MastersAgentsPage,
    MastersAgentCreateComponent,
    MastersAgentUpdateComponent,
    MastersAgentDeleteComponent,
} from '@app/pages';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        NotFoundPage,
        NotSupportedPage,
        FileSelectPage,
        DashboardPage,
        MastersAgentsPage,
        MastersAgentCreateComponent,
        MastersAgentUpdateComponent,
        MastersAgentDeleteComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RoutingModule,
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}