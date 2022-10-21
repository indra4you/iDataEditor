import { AfterViewInit, Component } from '@angular/core';

import { DataServiceTermDeposits } from '../../data.service.term.deposits';

import {
    HelperService,
    TermDepositModel,
    NameModel,
    NomineeModel,
} from '@app/services';

@Component({
    templateUrl: './list.page.html'
})
export class TermDepositListPage implements AfterViewInit {
    public readonly _noOfData: number[] = [...Array(3).keys()];

    public list: TermDepositModel[] = [];
    public isLoading: boolean = false;
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
            setTimeout(() => {
                this.isLoading = false;
            }, 500);
        }
    }

    public get haveData(
    ): boolean {
        return this.list.length > 0;
    }

    public toTenure(
        model: TermDepositModel,
    ): string {
        if (model.tenureDays > 0 && model.tenureMonths > 0) {
            return `${model.tenureDays} days & ${model.tenureMonths} months`;
        } else if (model.tenureDays > 0) {
            return `${model.tenureDays} days`;
        } else if (model.tenureMonths > 0) {
            return `${model.tenureMonths} months`;
        }

        return '';
    }

    public toNames(
        names: NameModel[],
    ): string {
        return names
            .map((name) => HelperService.toDisplayName(name))
            .join(', ');
    }

    public toNominees(
        nominees: NomineeModel[] | null,
    ): string {
        if (nominees == null || nominees.length == 0) {
            return '-';
        }

        return nominees
            .map((nominee) => `${HelperService.toDisplayName(nominee.name)} (${nominee.share}%)`)
            .join(', ');
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