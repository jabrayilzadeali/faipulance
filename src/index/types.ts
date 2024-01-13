export type Column = {
    name: string;
    type: string;
    unique: boolean;
    isRequired: boolean;
    default: number | string | typeof NaN;
    order: number
}

export type Data = Record<string, string | number>

export type Dataset = {
    name: string,
    dataTypes: string[];
    schema: {
        version: number;
        columnCount: number;
        columns: Column[];
    }
    data: Data[]
}
