import { AfterViewInit, Component } from '@angular/core';

import {
    DataService,
    AgentModel,
} from '@app/services';

@Component({
    templateUrl: './agents.page.html'
})
export class MastersAgentsPage implements AfterViewInit {
    public agentList: AgentModel[] = [];
    public isLoadingAgents: boolean = true;
    public showCreateForm: boolean = false;
    public showUpdateForm: boolean = false;
    public showDeleteConfirmation: boolean = false;
    public selectedAgentId: string | null = null;

    constructor (
        private readonly _dataService: DataService
    ) {
    }

    public ngAfterViewInit(
    ): void {
        setTimeout(() => {
            this.loadAgents();
        }, 500);
    }

    private async loadAgents(
    ): Promise<void> {
        this.isLoadingAgents = true;

        try {
            this.agentList = await this._dataService.getAllAgents();
        } finally {
            this.isLoadingAgents = false;
        }
    }

    public get haveData(
    ): boolean {
        return this.agentList.length > 0;
    }

    public onCreateClicked(
    ): void {
        this.showCreateForm = true;
    }

    public onCreateClosed(
        saved: boolean
    ): void {
        if (saved) {
            this.loadAgents();
        }

        this.showCreateForm = false;
    }

    public onUpdateClicked(
        agentId: string
    ): void {
        this.selectedAgentId = agentId;
        this.showUpdateForm = true;
    }

    public onUpdateClosed(
        saved: boolean
    ): void {
        if (saved) {
            this.loadAgents();
        }

        this.showUpdateForm = false;
        this.selectedAgentId = null;
    }

    public onDeleteClicked(
        agentId: string
    ): void {
        this.selectedAgentId = agentId;
        this.showDeleteConfirmation = true;
    }

    public onDeleteClosed(
        saved: boolean
    ): void {
        if (saved) {
            this.loadAgents();
        }

        this.showDeleteConfirmation = false;
        this.selectedAgentId = null;
    }
}