import View from "./view"
import Store from "./store"
import { Column } from "./types"

function filterColumns(columns: Column[], filters: Array<string>) {
    if (!filters.length) return columns
    return columns.filter(col => filters.includes(col.name))
}

export default function init() {
    // Initializing variables
    const view = new View()
    const store = new Store()

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const databaseName = store.dataset.name

    const headers = store.headers
    const data = store.data

    const columns = filterColumns(headers, [])
    console.log(columns)

    // setting number of columns in the grid(always 1 will be added automaticly for "+")
    // if we set columns 2 in html 1 more will be added
    const table = <HTMLElement>view.$.table
    // table.style.gridTemplateColumns = `
    //     70px repeat(1, minmax(120px, 1fr)) 70px repeat(1, minmax(120px, 1fr)) 100px
    // `

    view.$.tableHeader.append(databaseName)

    console.log(columns.length)
    table.style.setProperty("--number-of-cols", `${columns.length}`)

    // Sorting the data in order
    columns.sort((a, b) => a.order - b.order)

    // Adding Columns
    view.addColumnsToDatabase(columns, table, alphabet)

    // Adding Data for columns
    view.addRowsToDatabase(data, columns, table, alphabet)

    console.log(table.querySelectorAll(".header"))
}
