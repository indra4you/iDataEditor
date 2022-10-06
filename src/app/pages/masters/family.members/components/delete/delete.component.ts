import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

import { DataServiceFamilyMembers } from '../../data.service.family.members';

import {
    DataNotFoundError,
} from '@app/errors';

import {
    FamilyMemberModel,
} from '@app/services';

@Component({
    selector: 'masters-family-member-delete',
    templateUrl: './delete.component.html'
})
export class MastersFamilyMemberDeleteComponent implements AfterViewInit {
    @Input('familyMemberId')
    public familyMemberId: string;

    @Output('onClose')
    public onClose: EventEmitter<boolean> = new EventEmitter(true);

    public familyMember: FamilyMemberModel | null = null;
    private isLoadingFamilyMember: boolean = false;
    public isSaving: boolean = false;
    public errorMessage: string = '';

    public ngAfterViewInit(
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

    public onCancelClicked(
    ): void {
        this.onClose.emit(false);
    }

    public async onDeleteClicked(
    ): Promise<void> {
        this.isSaving = true;

        try {
            await DataServiceFamilyMembers.delete(this.familyMemberId);

            this.onClose.emit(true);
        } catch (error) {
            if (error instanceof DataNotFoundError) {
                this.errorMessage = `Family Member with ID '${this.familyMemberId}' not found`;
            }
        } finally {
            this.isSaving = false;
        }
    }
}