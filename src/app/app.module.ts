import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '@app/app.routing.module';
import { AppComponent } from '@app/app.component';

import {
    LeftBarComponent,
    FooterComponent,
} from '@app/components';

import {
    NotFoundPage,
    NotSupportedBrowserPage,
    HomePage,
    SelectFilePage,
    AgentsPage,
    AgentCreateComponent,
    AgentUpdateComponent,
    AgentDeleteComponent,
} from '@app/pages';

@NgModule({
    declarations: [
        AppComponent,
        LeftBarComponent,
        FooterComponent,
        NotFoundPage,
        NotSupportedBrowserPage,
        HomePage,
        SelectFilePage,
        AgentsPage,
        AgentCreateComponent,
        AgentUpdateComponent,
        AgentDeleteComponent,
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