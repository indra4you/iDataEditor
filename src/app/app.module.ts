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
} from '@app/pages';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        NotFoundPage,
        DashboardPage,
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