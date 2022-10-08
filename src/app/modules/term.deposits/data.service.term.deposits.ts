import {
    DataNotUniqueError,
    DataNotFoundError,
} from '@app/errors';

import {
    DataService,
    RootModel,
    TermDepositModel,
} from '@app/services';

export class DataServiceTermDeposits {
    public static async getAll(
    ): Promise<TermDepositModel[]> {
        const root: RootModel = await DataService.getRoot();
        return root.termDeposits ?? [];
    }

    public static async getById(
        id: string
    ): Promise<TermDepositModel> {
        const termDeposits: TermDepositModel[] = await this.getAll();
        const [termDeposit]: TermDepositModel[] = termDeposits.filter((value) => value.id === id);
        
        return termDeposit;
    }

    public static async create(
        request: TermDepositModel
    ): Promise<void> {
        const root: RootModel = await DataService.getRoot();
        root.termDeposits = root.termDeposits ?? [];

        const termDeposits: TermDepositModel[] = root.termDeposits.filter((value) =>
            value.accountNumber === request.accountNumber
        );
        if (termDeposits.length > 0) {
            throw new DataNotUniqueError();
        }

        root.termDeposits.push(request);

        await DataService.saveRoot(root);
    }

    public static async update(
        id: string,
        request: TermDepositModel
    ): Promise<void> {
        const root: RootModel = await DataService.getRoot();
        root.termDeposits = root.termDeposits ?? [];

        const index: number = root.termDeposits.findIndex((value) => value.id === id);
        if (index === -1) {
            throw new DataNotFoundError();
        }

        const termDeposits: TermDepositModel[] = root.termDeposits.filter((value) =>
            value.id !== id &&
            value.accountNumber === request.accountNumber
        );
        if (termDeposits.length > 0) {
            throw new DataNotUniqueError();
        }
        
        root.termDeposits[index] = request;

        await DataService.saveRoot(root);
    }

    public static async delete(
        id: string
    ): Promise<void> {
        const root: RootModel = await DataService.getRoot();
        root.termDeposits = root.termDeposits ?? [];

        const index: number = root.termDeposits.findIndex((value) => value.id === id);
        if (index === -1) {
            throw new DataNotFoundError();
        }
        
        root.termDeposits.splice(index, 1);

        await DataService.saveRoot(root);
    }
}