import { Column, Data } from "./types"

export default class View {
    $: Record<string, Element> = {}

    constructor() {
        this.$.table = document.querySelector<HTMLElement>('[data-table="2"]')!
        this.$.tableHeader = document.querySelector<HTMLElement>(
            '[data-name="header"]'
        )!
    }
    

    createAndAppendElement(
        cssClass: string,
        parentElement: HTMLElement,
        content?: string,
        dataType?: string,
        cellCoordinateColumns?: string,
        cellCoordinateRows?: number
    ) {
        let div = document.createElement("div")
        div.dataset.col = cellCoordinateColumns
        div.dataset.row = `${cellCoordinateRows}`
        div.classList.add(cssClass)
        dataType && (div.dataset.type = dataType)
        content && (div.innerHTML = content)
        parentElement.append(div)
    }

    generateDatabaseHeader(dataType: string, name: string) {
        const object = {
            string: () => {
                return `
                    <i class="fa-solid fa-align-left"></i>
                    <span>${name}</span>
                `
            },
            number: () => {
                return `
                    <i class="fa-solid fa-hashtag"></i>
                    <span>${name}</span>
                `
            },
        }
        return object[dataType as keyof typeof object]()
    }

    generateDatabaseRow(type: string, value: string | number) {
        const object = {
            string: () => {
                return `
                    <input type="text" class="input-text" value="${value}">
                `
            },
            number: () => {
                return `
                    <input type="number" class="input-number" value="${value}">
                `
            },
        }
        return object[type as keyof typeof object]()
    }
    addColumnsToHTML() {}

    addColumnsToDatabase(
        columns: Column[],
        table: HTMLElement,
        alphabet: string
    ) {
        for (let [index, col] of columns.entries()) {
            let innerhtml = this.generateDatabaseHeader(col.type, col.name)
            this.createAndAppendElement(
                "header",
                table,
                innerhtml,
                col.type,
                alphabet[index]
            )
        }

        this.createAndAppendElement(
            "header",
            table,
            `<i data-add-column class="fa-solid fa-plus"></i>
            <i data-database-settings class="fa-solid fa-ellipsis"></i>`
        )
    }
    addRowsToDatabase(
        data: Data[],
        columns: Column[],
        table: HTMLElement,
        alphabet: string
    ) {
        for (let row of data) {
            for (let [index, col] of columns.entries()) {
                let myData = row[col.name as keyof typeof row]
                let innerhtml = this.generateDatabaseRow(col.type, myData)
                this.createAndAppendElement(
                    "data",
                    table,
                    innerhtml,
                    col.type,
                    alphabet[index],
                    ++index
                )
            }
            this.createAndAppendElement("data", table)
        }
    }
}
