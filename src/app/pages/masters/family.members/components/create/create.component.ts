import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataServiceFamilyMembers } from '../../data.service.family.members';

import {
    DataNotUniqueError,
} from '@app/errors';

import {
    HelperService,
} from '@app/services';

@Component({
    selector: 'masters-family-member-create',
    templateUrl: './create.component.html'
})
export class MastersFamilyMemberCreateComponent implements OnInit, AfterViewInit {
    @Output('onClose')
    public onClose: EventEmitter<boolean> = new EventEmitter(true);

    @ViewChild('firstName')
    public firstName: ElementRef<HTMLInputElement>;
    public formGroup: FormGroup;
    public isSaving: boolean = false;
    public errorMessage: string = '';

    constructor(
        private readonly _formBuilder: FormBuilder,
    ) {
    }

    public ngOnInit(
    ): void {
        this.formGroup = this._formBuilder.group({
            firstName: [null, [Validators.required]],
            lastName: [null, [Validators.required]],
            emailAddress: [null, [Validators.email]],
            mobileNumber: [null, [Validators.maxLength(10), Validators.maxLength(10)]]
        });
    }

    public ngAfterViewInit(
    ): void {
        setTimeout(() => {
            this.firstName.nativeElement.focus();
        }, 500);
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
            await DataServiceFamilyMembers.create({
                id: HelperService.newGuid,
                name: {
                    first: this.fc.firstName.value,
                    middle: null,
                    last: this.fc.lastName.value,
                },
                emailAddresses: this.fc.emailAddress.value ? [
                    this.fc.emailAddress.value,
                ] : null,
                contactNumbers: this.fc.mobileNumber.value ? [
                    this.fc.mobileNumber.value,
                ] : null,
                addresses: null,
            });

            this.onClose.emit(true);
        } catch (error) {
            if (error instanceof DataNotUniqueError) {
                this.errorMessage = `Family Member with Name '${this.fc.firstName.value} ${this.fc.lastName.value}' already exists`;
            }
        } finally {
            this.isSaving = false;
        }
    }
}