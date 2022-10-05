import { Injectable } from '@angular/core';

import { FileSystem } from './file.system.memory';

import {
    DataNotUniqueError,
    DataNotFoundError,
} from '@app/errors';

import {
    RootModel,
    AgentModel,
} from '@app/services';

@Injectable({
    providedIn: 'root',
})
export class DataService extends FileSystem {
    public async getAllAgents(
    ): Promise<AgentModel[]> {
        const root: RootModel = await super.getRoot();
        return root.agents ?? [];
    }

    public async getAgentById(
        agentId: string
    ): Promise<AgentModel> {
        const agents: AgentModel[] = await this.getAllAgents();
        const [agent]: AgentModel[] = agents.filter((value) => value.id === agentId);
        
        return agent;
    }

    public async createAgent(
        agent: AgentModel
    ): Promise<void> {
        const root: RootModel = await super.getRoot();
        root.agents = root.agents ?? [];

        const agents: AgentModel[] = root.agents.filter((value) =>
            value.name.first === agent.name.first &&
            value.name.middle === agent.name.middle &&
            value.name.last === agent.name.last
        );
        if (agents.length > 0) {
            throw new DataNotUniqueError();
        }

        root.agents.push(agent);

        await super.saveRoot(root);
    }

    public async updateAgent(
        agentId: string,
        agent: AgentModel
    ): Promise<void> {
        const root: RootModel = await super.getRoot();
        root.agents = root.agents ?? [];

        const index: number = root.agents.findIndex((value) => value.id === agentId);
        if (index === -1) {
            throw new DataNotFoundError();
        }

        const agents: AgentModel[] = root.agents.filter((value) =>
            value.id !== agentId &&
            value.name.first === agent.name.first &&
            value.name.middle === agent.name.middle &&
            value.name.last === agent.name.last
        );
        if (agents.length > 0) {
            throw new DataNotUniqueError();
        }
        
        root.agents[index] = agent;

        await super.saveRoot(root);
    }

    public async deleteAgent(
        agentId: string
    ): Promise<void> {
        const root: RootModel = await super.getRoot();
        root.agents = root.agents ?? [];

        const index: number = root.agents.findIndex((value) => value.id === agentId);
        if (index === -1) {
            throw new DataNotFoundError();
        }
        
        root.agents.splice(index, 1);

        await super.saveRoot(root);
    }
}