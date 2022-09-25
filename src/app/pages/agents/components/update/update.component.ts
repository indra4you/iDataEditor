import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
    AgentNotFoundError,
    AgentNotUniqueError,
} from '@app/errors';

import {
    AgentDataService,
    AgentModel,
} from '@app/services';

@Component({
    selector: 'agent-update',
    templateUrl: './update.component.html'
})
export class AgentUpdateComponent implements OnInit, AfterViewInit {
    @Input('agentId')
    public agentId: string;

    @Output('onClose')
    public onClose: EventEmitter<boolean> = new EventEmitter(true);

    @ViewChild('firstName')
    public firstName: ElementRef<HTMLInputElement>;
    public formGroup: FormGroup;
    public agent: AgentModel | null = null;
    public isLoadingAgent: boolean = false;
    public isSaving: boolean = false;
    public errorMessage: string = '';

    constructor(
        private readonly formBuilder: FormBuilder,
    ) {
    }

    ngOnInit(
    ): void {
        this.formGroup = this.formBuilder.group({
            firstName: [null, [Validators.required]],
            lastName: [null, [Validators.required]],
            emailAddress: [null, [Validators.email]],
            mobileNumber: [null, [Validators.maxLength(10), Validators.maxLength(10)]]
        });
    }

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

            this.formGroup.patchValue({
                firstName: agent.name.first,
                lastName: agent.name.last,
                emailAddress: agent.emailAddresses !== null && agent.emailAddresses.length > 0 ? agent.emailAddresses[0] : '',
                mobileNumber: agent.contactNumbers !== null && agent.contactNumbers.length > 0 ? agent.contactNumbers[0] : '',
            });

            this.agent = agent;

            setTimeout(() => {
                this.firstName.nativeElement.focus();
            }, 500);
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
            await AgentDataService.update(this.agentId, {
                id: this.agentId,
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
            if (error instanceof AgentNotFoundError) {
                this.errorMessage = `Agent with ID '${this.agentId}' not found`;
            }
            else if (error instanceof AgentNotUniqueError) {
                this.errorMessage = `Agent with Name '${this.fc.firstName.value} ${this.fc.lastName.value}' already exists`;
            }
        } finally {
            this.isSaving = false;
        }
    }
}