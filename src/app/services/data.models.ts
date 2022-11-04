export type RootModel = {
    eTag: string;
    lastUpdatedAt: string;
    termDeposits: TermDepositModel[] | null;
}

export type NomineeModel = {
    name: NameModel;
    relation: string;
    share: number;
}

export type NameModel = {
    first: string;
    middle: string | null;
    last: string;
}

export type TermDepositModel = {
    id: string;
    status: 'Active';
    accountNumber: string;
    currencyCode: string;
    through: string;
    termDepositType: string;
    institutionName: string;
    institutionBranch: string;
    names: NameModel[];
    startDate: Date;
    principalAmount: number;
    interestRate: number;
    tenureDays: number;
    tenureMonths: number;
    maturityDate: Date;
    maturityAmount: number;
    interestAmount: number;
    nominees: NomineeModel[] | null;
    features: string | null;
}