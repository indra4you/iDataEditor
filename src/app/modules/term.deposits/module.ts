import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FileSystemGuard } from '@app/services';

import { TermDepositsRoutingModule } from './routing.module';

import {
    TermDepositListPage,
    TermDepositFormPage,
} from './pages';

import {
    TermDepositDeleteComponent,
} from './components';

import {
    NameFormComponent,
    NomineeFormComponent,
} from '../components';

@NgModule({
    declarations: [
        TermDepositListPage,
        TermDepositFormPage,
        TermDepositDeleteComponent,
        NameFormComponent,
        NomineeFormComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TermDepositsRoutingModule
    ],
    providers: [
        FileSystemGuard
    ]
})
export class TermDepositsModule {
}