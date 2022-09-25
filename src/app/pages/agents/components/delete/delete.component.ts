import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

import {
    AgentNotFoundError,
} from '@app/errors';

import {
    AgentDataService,
    AgentModel,
} from '@app/services';

@Component({
    selector: 'agent-delete',
    templateUrl: './delete.component.html'
})
export class AgentDeleteComponent implements AfterViewInit {
    @Input('agentId')
    public agentId: string;

    @Output('onClose')
    public onClose: EventEmitter<boolean> = new EventEmitter(true);

    public agent: AgentModel | null = null;
    private isLoadingAgent: boolean = false;
    public isSaving: boolean = false;
    public errorMessage: string = '';

    ngAfterViewInit(
    ): void {
        setTimeout(() => {
            this.loadAgent();
        }, 500);
    }

    private async loadAgent(
    ): Promise<void> {
        this.isLoadingAgent = true;

        try {
            const agents: AgentModel[] = await AgentDataService.getAll();
            const [agent]: AgentModel[] = agents.filter((value) => value.id === this.agentId);
            this.agent = agent;
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
            await AgentDataService.delete(this.agentId);

            this.onClose.emit(true);
        } catch (error) {
            if (error instanceof AgentNotFoundError) {
                this.errorMessage = `Agent with ID '${this.agentId}' not found`;
            }
        } finally {
            this.isSaving = false;
        }
    }
}