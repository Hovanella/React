import react from "react";
import {ServerResponse} from "./ServerResponse";
import {TableRaw} from "./TableRaw";

export const TableBody = () => {
return(
<tbody>
{ServerResponse.map(TableRaw)}
</tbody>
)

 }

