import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

import {
    DataNotFoundError,
} from '@app/errors';

import {
    DataService,
    AgentModel,
} from '@app/services';

@Component({
    selector: 'masters-agent-delete',
    templateUrl: './delete.component.html'
})
export class MastersAgentDeleteComponent implements AfterViewInit {
    @Input('agentId')
    public agentId: string;

    @Output('onClose')
    public onClose: EventEmitter<boolean> = new EventEmitter(true);

    public agent: AgentModel | null = null;
    private isLoadingAgent: boolean = false;
    public isSaving: boolean = false;
    public errorMessage: string = '';

    constructor(
        private readonly _dataService: DataService,
    ) {
    }

    public ngAfterViewInit(
    ): void {
        setTimeout(() => {
            this.loadAgent();
        }, 500);
    }

    private async loadAgent(
    ): Promise<void> {
        this.isLoadingAgent = true;

        try {
            this.agent = await this._dataService.getAgentById(this.agentId);
        } finally {
            this.isLoadingAgent = false;
        }
    }

    public get haveData(
    ): boolean {
        return !this.isLoadingAgent && this.agent !== null;
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
            await this._dataService.deleteAgent(this.agentId);

            this.onClose.emit(true);
        } catch (error) {
            if (error instanceof DataNotFoundError) {
                this.errorMessage = `Agent with ID '${this.agentId}' not found`;
            }
        } finally {
            this.isSaving = false;
        }
    }
}