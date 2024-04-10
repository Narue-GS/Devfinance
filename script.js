let inflows = [
    {
        desc:"venda",
        value:2000,
        date:"09/04/2024"
    },
    {
        desc:"venda",
        value:2000,
        date:"09/04/2024"
    },
    {
        desc:"venda",
        value:2000,
        date:"09/04/2024"
    },
]
let outflows = [
    {
        desc:"compra de material",
        value:200,
        date:"09/04/2024"
    },
    {
        desc:"compra de material",
        value:200,
        date:"09/04/2024"
    },
    {
        desc:"compra de material",
        value:200,
        date:"09/04/2024"
    },
]

let BRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

function calcBalance() {
    let inflowValue = inflows.reduce((sum, item) => sum + item.value, 0)
    let outflowValue = outflows.reduce((sum, item) => sum + item.value, 0)
    let dreValue = inflowValue - outflowValue

    document.querySelector("#inflow").innerHTML = BRL.format(inflowValue)
    document.querySelector("#outflow").innerHTML = BRL.format(outflowValue)
    document.querySelector("#dre").innerHTML = BRL.format(dreValue)
}

function updateTable(table, data) {
    data.forEach(i => {
        let row = document.createElement("tr")
        let desc = document.createElement("td"), value = document.createElement("td"), date = document.createElement("td")

        desc.innerHTML = i.desc

        value.innerHTML = BRL.format(i.value)
        value.classList = "value"

        date.innerHTML = i.date
        let list = [desc, value, date].forEach(x => row.appendChild(x))

        table.appendChild(row)
    })
}

function updateBoard() {
    updateTable(document.querySelector("#q-inflows .data-table tbody"), inflows)
    updateTable(document.querySelector("#q-outflows  .data-table tbody"), outflows)
}

function render() {
    calcBalance()
    updateBoard()
}

function init(){
    render()
}