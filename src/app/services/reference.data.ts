export type CurrencyModel = {
    code: string;
    symbole: string;
    name: string;
}

export class ReferenceData {
    public static readonly SupportedCurrencies: CurrencyModel[] = [
        { code: 'INR', symbole: '₹', name: 'Indian Rupee' },
    ];
}