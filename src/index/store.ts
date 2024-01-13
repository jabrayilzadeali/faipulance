import { Dataset } from "./types";

const dataset: Dataset = {
    name: "Database 1",
    dataTypes: ["string", "number"],
    schema: {
        version: 1,
        columnCount: 3,
        columns: [
            {
                name: "id",
                type: "number",
                unique: true,
                isRequired: true,
                default: NaN,
                order: 1
            },
            {
                name: "product",
                type: "string",
                unique: true,
                isRequired: true,
                default: NaN,
                order: 2
            },
            {
                name: "price",
                type: "number",
                unique: false,
                isRequired: false,
                default: 0,
                order: 3
            },
            {
                name: "discount",
                type: "number",
                unique: false,
                isRequired: false,
                default: 0,
                order: 4
            }
        ],
    },
    data: [
        {"id": 1, "product": "Iphone", "price": 900, "discount": 10},
        {"id": 2, "product": "Samsung", "price": 800},
        {"id": 3, "product": "Google Pixel", "price": 700},
    ]
}

export default class Store {
    dataset: Dataset

    constructor() {
        this.dataset = dataset
    }
    
    get headers() {
        return this.dataset.schema.columns
    }

    get data() {
        return this.dataset.data
    }

}