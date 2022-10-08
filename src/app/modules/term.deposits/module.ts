import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TermDepositsRoutingModule } from './routing.module';

import {
    TermDepositListPage,
} from './pages';

import {
    TermDepositFormComponent,
    TermDepositDeleteComponent,
} from './components';

@NgModule({
    declarations: [
        TermDepositListPage,
        TermDepositFormComponent,
        TermDepositDeleteComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TermDepositsRoutingModule
    ]
})
export class TermDepositsModule {
}