import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
    DataNotFoundError,
    DataNotUniqueError,
} from '@app/errors';

import {
    HelperService,
    TermDepositModel,
    NameModel,
} from '@app/services';

import { DataServiceTermDeposits } from '../../data.service.term.deposits';

@Component({
    selector: 'term-deposit-form',
    templateUrl: './form.component.html'
})
export class TermDepositFormComponent implements OnInit, AfterViewInit {
    public readonly _today: Date = new Date();
    public readonly _noOfFields: number[] = [...Array(3).keys()];
    
    @Input('id')
    public id: string | null;

    @Output('onClose')
    public onClose: EventEmitter<boolean> = new EventEmitter(true);

    @ViewChild('focusOn')
    public focusOn: ElementRef<HTMLInputElement>;
    public formGroup: FormGroup;
    private model: TermDepositModel | null;
    public isLoading: boolean = true;
    public isSaving: boolean = false;
    public errorMessage: string = '';

    constructor(
        private readonly _formBuilder: FormBuilder,
    ) {
    }

    public ngOnInit(
    ): void {
        this.formGroup = this._formBuilder.group({
            accountNumber: [null, [Validators.required]],
            currencyCode: ['INR', [Validators.required]],
            institutionName: [null, [Validators.required]],
            institutionBranch: [null, [Validators.required]],
            firstName: [null, [Validators.required]],
            middleName: [null, []],
            lastName: [null, [Validators.required]],
            startDate: [null, [Validators.required]],
            principalAmount: [null, [Validators.required, Validators.min(1)]],
            tenureDays: [null, [Validators.required, Validators.min(0)]],
            tenureMonths: [null, [Validators.required, Validators.min(0)]],
            interestRate: [null, [Validators.required, Validators.min(0.01), Validators.max(100.00)]],
            interestAmount: [null, [Validators.required, Validators.min(0.01)]],
            maturityDate: [null, [Validators.required]],
            maturityAmount: [null, [Validators.required, Validators.min(0)]],
            features: [null, []],
        });
    }

    public ngAfterViewInit(
    ): void {
        setTimeout(() => {
            this.load();
        }, 500);
    }

    private get haveValidId(
    ): boolean {
        return !(null === this.id);
    }

    private async load(
    ): Promise<void> {
        if (this.haveValidId) {
            this.model = await DataServiceTermDeposits.getById(this.id!);

            this.formGroup.patchValue({
                accountNumber: this.model.accountNumber,
                institutionName: this.model.institutionName,
                institutionBranch: this.model.institutionBranch,
                firstName: this.model.name.first,
                middleName: this.model.name.middle,
                lastName: this.model.name.last,
                startDate: this.model.startDate,
                principalAmount: this.model.principalAmount,
                tenureDays: this.model.tenureDays,
                tenureMonths: this.model.tenureMonths,
                interestRate: this.model.interestRate,
                interestAmount: this.model.interestAmount,
                maturityDate: this.model.maturityDate,
                maturityAmount: this.model.maturityAmount,
                features: this.model.features,
            });
        }

        this.isLoading = false;
        setTimeout(() => {
            this.focusOn.nativeElement.focus();
        }, 500);
    }

    private get toName(
    ): NameModel {
        return {
            first: this.fc.firstName.value,
            middle: this.fc.middleName.value,
            last: this.fc.lastName.value,
        };
    }

    public get haveError(
    ): boolean {
        return this.errorMessage.length > 0;
    }

    public get fc(
    ) {
        return this.formGroup.controls;
    }

    public onCancelClicked(
    ): void {
        this.onClose.emit(false);
    }

    public async onSubmitClicked(
    ): Promise<void> {
        this.isSaving = true;

        try {
            if (this.haveValidId) {
                await DataServiceTermDeposits.update(
                    this.model!.id, {
                    id: this.model!.id,
                    status: this.model!.status,
                    accountNumber: this.fc.accountNumber.value,
                    currencyCode: this.fc.currencyCode.value,
                    institutionName: this.fc.institutionName.value,
                    institutionBranch: this.fc.institutionBranch.value,
                    name: this.toName,
                    startDate: this.fc.startDate.value,
                    principalAmount: this.fc.principalAmount.value,
                    tenureDays: this.fc.tenureDays.value,
                    tenureMonths: this.fc.tenureMonths.value,
                    interestRate: this.fc.interestRate.value,
                    interestAmount: this.fc.interestAmount.value,
                    maturityDate: this.fc.maturityDate.value,
                    maturityAmount: this.fc.maturityAmount.value,
                    features: this.fc.features.value
                });
            } else {
                await DataServiceTermDeposits.create({
                    id: HelperService.newGuid,
                    status: 'Active',
                    accountNumber: this.fc.accountNumber.value,
                    currencyCode: this.fc.currencyCode.value,
                    institutionName: this.fc.institutionName.value,
                    institutionBranch: this.fc.institutionBranch.value,
                    name: this.toName,
                    startDate: this.fc.startDate.value,
                    principalAmount: this.fc.principalAmount.value,
                    tenureDays: this.fc.tenureDays.value,
                    tenureMonths: this.fc.tenureMonths.value,
                    interestRate: this.fc.interestRate.value,
                    interestAmount: this.fc.interestAmount.value,
                    maturityDate: this.fc.maturityDate.value,
                    maturityAmount: this.fc.maturityAmount.value,
                    features: this.fc.features.value
                });
            }

            this.onClose.emit(true);
        } catch (error) {
            if (error instanceof DataNotFoundError) {
                this.errorMessage = `Term Deposit with Account Number '${this.fc.accountNumber.value}' not found`;
            }
            else if (error instanceof DataNotUniqueError) {
                this.errorMessage = `Term Deposit with Account Number '${this.fc.accountNumber.value}' already exists`;
            }
        } finally {
            this.isSaving = false;
        }
    }
}