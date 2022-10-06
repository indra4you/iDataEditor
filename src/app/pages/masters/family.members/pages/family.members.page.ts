import { AfterViewInit, Component } from '@angular/core';

import { DataServiceFamilyMembers } from '../data.service.family.members';

import {
    FamilyMemberModel,
} from '@app/services';

@Component({
    templateUrl: './family.members.page.html'
})
export class MastersFamilyMembersPage implements AfterViewInit {
    public familyMemberList: FamilyMemberModel[] = [];
    public isLoadingFamilyMembers: boolean = true;
    public showCreateForm: boolean = false;
    public showUpdateForm: boolean = false;
    public showDeleteConfirmation: boolean = false;
    public selectedFamilyMemberId: string | null = null;

    public ngAfterViewInit(
    ): void {
        setTimeout(() => {
            this.loadFamilyMembers();
        }, 500);
    }

    private async loadFamilyMembers(
    ): Promise<void> {
        this.isLoadingFamilyMembers = true;

        try {
            this.familyMemberList = await DataServiceFamilyMembers.getAll();
        } finally {
            this.isLoadingFamilyMembers = false;
        }
    }

    public get haveData(
    ): boolean {
        return this.familyMemberList.length > 0;
    }

    public onCreateClicked(
    ): void {
        this.showCreateForm = true;
    }

    public onCreateClosed(
        saved: boolean
    ): void {
        if (saved) {
            this.loadFamilyMembers();
        }

        this.showCreateForm = false;
    }

    public onUpdateClicked(
        familyMemberId: string
    ): void {
        this.selectedFamilyMemberId = familyMemberId;
        this.showUpdateForm = true;
    }

    public onUpdateClosed(
        saved: boolean
    ): void {
        if (saved) {
            this.loadFamilyMembers();
        }

        this.showUpdateForm = false;
        this.selectedFamilyMemberId = null;
    }

    public onDeleteClicked(
        familyMemberId: string
    ): void {
        this.selectedFamilyMemberId = familyMemberId;
        this.showDeleteConfirmation = true;
    }

    public onDeleteClosed(
        saved: boolean
    ): void {
        if (saved) {
            this.loadFamilyMembers();
        }

        this.showDeleteConfirmation = false;
        this.selectedFamilyMemberId = null;
    }
}