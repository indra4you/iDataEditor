import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
    DataNotFoundError,
    DataNotUniqueError,
} from '@app/errors';

import {
    HelperService,
    ReferenceData,
    CurrencyModel,
    NameModel,
    NomineeModel,
    TermDepositModel,
} from '@app/services';

import { DataServiceTermDeposits } from '../../data.service.term.deposits';

@Component({
    templateUrl: './form.page.html'
})
export class TermDepositFormPage implements OnInit {
    public readonly _today: Date = new Date();
    public readonly _supportedCurrencies: CurrencyModel[] = ReferenceData.SupportedCurrencies;

    @ViewChild('focusOn')
    public focusOn: ElementRef<HTMLInputElement>;

    private id: string | null = null;
    public mainFormGroup: FormGroup;
    public nameList: NameModel[] = [];
    public nomineeList: NomineeModel[] = [];
    public isLoading: boolean = true;
    public showNameForm: boolean = false;
    public showNomineeForm: boolean = false;
    public isSaving: boolean = false;
    public errorMessage: string = '';

    constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute
    ) {
    }

    public ngOnInit(
    ): void {
        this._activatedRoute.paramMap
            .subscribe({
                next: params => {
                    if (params.has('id')) {
                        this.id = params.get('id');
                    }

                    this.setupFormGroup();
                }
            });
    }

    private async setupFormGroup(
    ): Promise<void> {
        this.mainFormGroup = this._formBuilder.group({
            accountNumber: new FormControl('', [Validators.required]),
            currencyCode: new FormControl('INR', [Validators.required]),
            termDepositType: new FormControl('', Validators.required),
            startDate: new FormControl('', [Validators.required]),
            principalAmount: new FormControl('', [Validators.required, Validators.min(100)]),
            interestRate: new FormControl('', [Validators.required, Validators.min(0.01), Validators.max(100.00)]),
            tenureDays: new FormControl('', [Validators.required, Validators.min(0)]),
            tenureMonths: new FormControl('', [Validators.required, Validators.min(0)]),
            maturityDate: new FormControl('', [Validators.required]),
            maturityAmount: new FormControl('', [Validators.required, Validators.min(100)]),
            interestAmount: new FormControl('', [Validators.required, Validators.min(0)]),
            institutionName: new FormControl('', [Validators.required]),
            institutionBranch: new FormControl('', [Validators.required]),
            through: new FormControl('', [Validators.required]),
            features: new FormControl('', []),
        });

        if (this.haveValidId) {
            const termDeposit: TermDepositModel = await DataServiceTermDeposits.getById(this.id!);

            this.mainFormGroup.patchValue({
                accountNumber: termDeposit.accountNumber,
                currencyCode: termDeposit.currencyCode,
                termDepositType: termDeposit.termDepositType,
                startDate: termDeposit.startDate,
                principalAmount: termDeposit.principalAmount,
                interestRate: termDeposit.interestRate,
                tenureDays: termDeposit.tenureDays,
                tenureMonths: termDeposit.tenureMonths,
                maturityDate: termDeposit.maturityDate,
                maturityAmount: termDeposit.maturityAmount,
                interestAmount: termDeposit.interestAmount,
                institutionName: termDeposit.institutionName,
                institutionBranch: termDeposit.institutionBranch,
                through: termDeposit.through,
                features: termDeposit.features,
            });

            this.nameList = termDeposit.names;
            this.nomineeList = null === termDeposit.nominees ? [] : termDeposit.nominees;
        }

        this.isLoading = false;

        setTimeout(() => {
            this.focusOn.nativeElement.focus();
        }, 500);
    }

    public get mainFormGroupControls(
    ): { [key: string]: AbstractControl } {
        return this.mainFormGroup.controls;
    }

    public get haveValidId(
    ): boolean {
        return this.id !== null && this.id.length > 0;
    }

    public get haveNames(
    ): boolean {
        return this.nameList.length > 0;
    }

    public get haveNominees(
    ): boolean {
        return this.nomineeList.length > 0;
    }

    public get haveError(
    ): boolean {
        return this.errorMessage.length > 0;
    }

    public get isFormValid(
    ): boolean {
        return this.mainFormGroup.valid && this.haveNames;
    }

    public onAddNameClicked(
    ): boolean {
        this.showNameForm = true;

        return false;
    }

    public onNameFormClose(
        name: NameModel | null
    ): void {
        if (null !== name) {
            this.nameList.push(name);
        }

        this.showNameForm = false;
    }

    public onDeleteNameClicked(
        index: number
    ): void {
        const response: boolean = confirm('Are you sure you want to delete Name?');
        
        if (response) {
            this.nameList.splice(index, 1);
        }
    }

    public onAddNomineeClicked(
    ): boolean {
        this.showNomineeForm = true;

        return false;
    }

    public onNomineeFormClose(
        nominee: NomineeModel | null
    ): void {
        if (null !== nominee) {
            this.nomineeList.push(nominee);
        }

        this.showNomineeForm = false;
    }

    public onDeleteNomineeClicked(
        index: number
    ): void {
        const response: boolean = confirm('Are you sure you want to delete Nominee?');
        
        if (response) {
            this.nomineeList.splice(index, 1);
        }
    }

    public async onSubmitClicked(
    ): Promise<void> {
        this.isSaving = true;

        const termDeposit: TermDepositModel = {
            id: this.haveValidId ? this.id! : HelperService.newGuid,
            status: 'Active',
            accountNumber: this.mainFormGroupControls.accountNumber.value,
            currencyCode: this.mainFormGroupControls.currencyCode.value,
            termDepositType: this.mainFormGroupControls.termDepositType.value,
            institutionName: this.mainFormGroupControls.institutionName.value,
            institutionBranch: this.mainFormGroupControls.institutionBranch.value,
            names: this.nameList,
            startDate: this.mainFormGroupControls.startDate.value,
            principalAmount: this.mainFormGroupControls.principalAmount.value,
            tenureDays: this.mainFormGroupControls.tenureDays.value,
            tenureMonths: this.mainFormGroupControls.tenureMonths.value,
            interestRate: this.mainFormGroupControls.interestRate.value,
            interestAmount: this.mainFormGroupControls.interestAmount.value,
            maturityDate: this.mainFormGroupControls.maturityDate.value,
            maturityAmount: this.mainFormGroupControls.maturityAmount.value,
            nominees: this.haveNominees ? this.nomineeList : null,
            through: this.mainFormGroupControls.through.value,
            features: this.mainFormGroupControls.features.value,
        };

        try {
            if (this.haveValidId) {
                await DataServiceTermDeposits.update(this.id!, termDeposit);
            } else {
                await DataServiceTermDeposits.create(termDeposit);
            }

            this._router.navigate(['/term.deposits']);
        } catch (error) {
            if (error instanceof DataNotFoundError) {
                this.errorMessage = `Term Deposit with Account Number '${this.mainFormGroupControls.accountNumber.value}' not found!`;
            }
            else if (error instanceof DataNotUniqueError) {
                this.errorMessage = `Term Deposit with Account Number '${this.mainFormGroupControls.accountNumber.value}' already exists!`;
            }
        } finally {
            this.isSaving = false;
        }
    }
}