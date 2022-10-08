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
    name: NameModel;
    startDate: Date;
    principalAmount: number;
    tenureDays: number;
    tenureMonths: number;
    interestRate: number;
    interestAmount: number;
    maturityDate: Date;
    maturityAmount: number;
    features: string;
}

export type NameModel = {
    first: string | null;
    middle: string | null;
    last: string | null;
}