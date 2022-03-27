import "./Table.css"

export const TableRaw = (object) => {
    const classes = object.change > 0 ? "tableData positiveChange" : "tableData negativeChange";

    return [
        <tr>
            <td className="tableData"> {object.stock_name} </td>
            <td className="tableData"> {object.company_name} </td>
            <td className="tableData"> {object.price} </td>
            <td className="tableData"> {object.currency} </td>
            <td className={classes}> {object.change} </td>
        </tr>
    ];



}