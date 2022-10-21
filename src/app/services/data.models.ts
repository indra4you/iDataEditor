export type RootModel = {
    eTag: string;
    lastUpdatedAt: string;
    termDeposits: TermDepositModel[] | null;
}

export type TermDepositModel = {
    id: string;
    status: 'Active';
    accountNumber: string;
    currencyCode: string;
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
    nominees: NomineeModel[] | null,
    features: string | null;
}

export type NomineeModel = {
    name: NameModel,
    share: number;
}

export type NameModel = {
    first: string;
    middle: string | null;
    last: string;
}