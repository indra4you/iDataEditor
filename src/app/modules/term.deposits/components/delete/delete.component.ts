import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

import { DataServiceTermDeposits } from '../../data.service.term.deposits';

import {
    DataNotFoundError,
} from '@app/errors';

import {
    HelperService,
    TermDepositModel,
    NameModel,
} from '@app/services';

@Component({
    selector: 'term-deposit-delete',
    templateUrl: './delete.component.html'
})
export class TermDepositDeleteComponent implements AfterViewInit {
    public readonly _noOfFields: number[] = [...Array(3).keys()];
    
    @Input('id')
    public id: string | null;

    @Output('onClose')
    public onClose: EventEmitter<boolean> = new EventEmitter(true);

    public model: TermDepositModel | null = null;
    private isLoading: boolean = false;
    public isSaving: boolean = false;
    public errorMessage: string = '';

    public ngAfterViewInit(
    ): void {
        setTimeout(() => {
            this.load();
        }, 500);
    }

    private async load(
    ): Promise<void> {
        this.isLoading = true;

        try {
            this.model = await DataServiceTermDeposits.getById(this.id!);
        } finally {
            this.isLoading = false;
        }
    }

    public get haveData(
    ): boolean {
        return !this.isLoading && this.model !== null;
    }

    public get haveError(
    ): boolean {
        return this.errorMessage.length > 0;
    }

    public toDisplayName(
        name: NameModel
    ): string | null {
        return HelperService.toDisplayName(name);
    }

    public onCancelClicked(
    ): void {
        this.onClose.emit(false);
    }

    public async onDeleteClicked(
    ): Promise<void> {
        this.isSaving = true;

        try {
            await DataServiceTermDeposits.delete(this.id!);

            this.onClose.emit(true);
        } catch (error) {
            if (error instanceof DataNotFoundError) {
                this.errorMessage = `Term Deposit with ID '${this.id}' not found`;
            }
        } finally {
            this.isSaving = false;
        }
    }
}