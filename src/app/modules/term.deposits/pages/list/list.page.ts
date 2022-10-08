import { AfterViewInit, Component } from '@angular/core';

import { DataServiceTermDeposits } from '../../data.service.term.deposits';

import {
    HelperService,
    TermDepositModel,
    NameModel,
} from '@app/services';

@Component({
    templateUrl: './list.page.html'
})
export class TermDepositListPage implements AfterViewInit {
    public list: TermDepositModel[] = [];
    public isLoading: boolean = false;
    public showForm: boolean = false;
    public showDelete: boolean = false;
    public selectedId: string | null = null;

    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.load();
        }, 500);
    }

    private async load(
    ): Promise<void> {
        this.isLoading = true;

        try {
            this.list = await DataServiceTermDeposits.getAll();
        } catch (error) {
            console.error(error);
        } finally {
            this.isLoading = false;
        }
    }

    public get haveData(
    ): boolean {
        return this.list.length > 0;
    }

    public toFullName(
        name: NameModel
    ): string {
        return HelperService.toFullName(name);
    }

    public onAddClicked(
    ): void {
        this.selectedId = null;
        this.showForm = true;
    }

    public onEditClicked(
        id: string
    ): void {
        this.selectedId = id;
        this.showForm = true;
    }

    public onFormClosed(
        saved: boolean
    ): void {
        if (saved) {
            this.load();
        }

        this.selectedId = null;
        this.showForm = false;
    }

    public onDeleteClicked(
        id: string
    ): void {
        this.selectedId = id;
        this.showDelete = true;
    }

    public onDeleteClosed(
        saved: boolean
    ): void {
        if (saved) {
            this.load();
        }

        this.selectedId = null;
        this.showDelete = false;
    }
}