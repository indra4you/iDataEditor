import {
    AgentNotFoundError,
    AgentNotUniqueError,
} from '@app/errors';

import {
    RootModel,
    AgentModel,
} from './DataModels';

import {
    DataService,
} from './DataService';

export class AgentDataService extends DataService {
    public static async getAll(
    ): Promise<AgentModel[]> {
        const root: RootModel = await super.getRoot();

        return root.agents;
    }

    public static async create(
        agent: AgentModel
    ): Promise<void> {
        const root: RootModel = await super.getRoot();

        const agents: AgentModel[] = root.agents.filter((value) => value.name.first === agent.name.first && value.name.middle === agent.name.middle && value.name.last === agent.name.last);
        if (agents.length > 0) {
            throw new AgentNotUniqueError();
        }

        root.agents.push(agent);

        await super.saveRoot(root);
    }

    public static async update(
        agentId: string,
        agent: AgentModel
    ): Promise<void> {
        const root: RootModel = await super.getRoot();
        const index: number = root.agents.findIndex((value) => value.id === agentId);

        if (index === -1) {
            throw new AgentNotFoundError();
        }

        const agents: AgentModel[] = root.agents.filter((value) => value.id !== agentId && value.name.first === agent.name.first && value.name.middle === agent.name.middle && value.name.last === agent.name.last);
        if (agents.length > 0) {
            throw new AgentNotUniqueError();
        }
        
        root.agents[index] = agent;

        await super.saveRoot(root);
    }

    public static async delete(
        agentId: string
    ): Promise<void> {
        const root: RootModel = await super.getRoot();
        const index: number = root.agents.findIndex((value) => value.id === agentId);

        if (index === -1) {
            throw new AgentNotFoundError();
        }
        
        root.agents.splice(index, 1);

        await super.saveRoot(root);
    }
}