export type RootModel = {
    eTag: string;
    lastUpdatedAt: string;
    agents: AgentModel[] | null;
}

export type AgentModel = {
    id: string;
    name: NameModel;
    emailAddresses: string[] | null;
    contactNumbers: string[] | null;
    addresses: AddressModel[] | null;
}

export type AddressModel = {
    line1: string | null;
    line2: string | null;
    line3: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    zip: string | null;
}

export type NameModel = {
    first: string | null;
    middle: string | null;
    last: string | null;
}