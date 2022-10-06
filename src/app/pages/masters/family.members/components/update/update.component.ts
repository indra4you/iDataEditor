import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataServiceFamilyMembers } from '../../data.service.family.members';

import {
    DataNotFoundError,
    DataNotUniqueError,
} from '@app/errors';

import {
    FamilyMemberModel,
} from '@app/services';

@Component({
    selector: 'masters-family-member-update',
    templateUrl: './update.component.html'
})
export class MastersFamilyMemberUpdateComponent implements OnInit, AfterViewInit {
    @Input('familyMemberId')
    public familyMemberId: string;

    @Output('onClose')
    public onClose: EventEmitter<boolean> = new EventEmitter(true);

    @ViewChild('firstName')
    public firstName: ElementRef<HTMLInputElement>;
    public formGroup: FormGroup;
    public familyMember: FamilyMemberModel | null = null;
    public isLoadingFamilyMember: boolean = false;
    public isSaving: boolean = false;
    public errorMessage: string = '';

    constructor(
        private readonly _formBuilder: FormBuilder,
    ) {
    }

    ngOnInit(
    ): void {
        this.formGroup = this._formBuilder.group({
            firstName: [null, [Validators.required]],
            lastName: [null, [Validators.required]],
            emailAddress: [null, [Validators.email]],
            mobileNumber: [null, [Validators.maxLength(10), Validators.maxLength(10)]]
        });
    }

    ngAfterViewInit(
    ): void {
        setTimeout(() => {
            this.loadFamilyMember();
        }, 500);
    }

    private async loadFamilyMember(
    ): Promise<void> {
        this.isLoadingFamilyMember = true;
        
        try {
            this.familyMember = await DataServiceFamilyMembers.getById(this.familyMemberId);

            this.formGroup.patchValue({
                firstName: this.familyMember.name.first,
                lastName: this.familyMember.name.last,
                emailAddress: this.familyMember.emailAddresses !== null && this.familyMember.emailAddresses.length > 0 ? this.familyMember.emailAddresses[0] : '',
                mobileNumber: this.familyMember.contactNumbers !== null && this.familyMember.contactNumbers.length > 0 ? this.familyMember.contactNumbers[0] : '',
            });

            setTimeout(() => {
                this.firstName.nativeElement.focus();
            }, 500);
        } finally {
            this.isLoadingFamilyMember = false;
        }
    }

    public get haveData(
    ): boolean {
        return !this.isLoadingFamilyMember && this.familyMember !== null;
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
            await DataServiceFamilyMembers.update(this.familyMemberId, {
                id: this.familyMemberId,
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
            if (error instanceof DataNotFoundError) {
                this.errorMessage = `Family Member with ID '${this.familyMemberId}' not found`;
            }
            else if (error instanceof DataNotUniqueError) {
                this.errorMessage = `Family Member with Name '${this.fc.firstName.value} ${this.fc.lastName.value}' already exists`;
            }
        } finally {
            this.isSaving = false;
        }
    }
}