import {TableHeader} from "./TableHeader";
import {TableBody} from "./TableBody";
import './Table.css';

export const Table = () => {
    return (
        <table>
            {TableHeader()}
            {TableBody()}
        </table>)
}