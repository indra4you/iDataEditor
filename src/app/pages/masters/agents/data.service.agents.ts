import {
    DataNotUniqueError,
    DataNotFoundError,
} from '@app/errors';

import {
    DataService,
    RootModel,
    AgentModel,
} from '@app/services';

export class DataServiceAgents {
    public static async getAll(
    ): Promise<AgentModel[]> {
        const root: RootModel = await DataService.getRoot();
        return root.agents ?? [];
    }

    public static async getById(
        agentId: string
    ): Promise<AgentModel> {
        const agents: AgentModel[] = await this.getAll();
        const [agent]: AgentModel[] = agents.filter((value) => value.id === agentId);
        
        return agent;
    }

    public static async create(
        agent: AgentModel
    ): Promise<void> {
        const root: RootModel = await DataService.getRoot();
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

        await DataService.saveRoot(root);
    }

    public static async update(
        agentId: string,
        agent: AgentModel
    ): Promise<void> {
        const root: RootModel = await DataService.getRoot();
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

        await DataService.saveRoot(root);
    }

    public static async delete(
        agentId: string
    ): Promise<void> {
        const root: RootModel = await DataService.getRoot();
        root.agents = root.agents ?? [];

        const index: number = root.agents.findIndex((value) => value.id === agentId);
        if (index === -1) {
            throw new DataNotFoundError();
        }
        
        root.agents.splice(index, 1);

        await DataService.saveRoot(root);
    }
}