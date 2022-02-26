import {TextChessNotes} from "./TextChessNotes";
import {ChessBoard} from "./ChessBoard";
import "./Chess.css"

export const Chess = () => {
    return (
        <table>
            {TextChessNotes()}
            {ChessBoard()}
            {TextChessNotes()}
        </table>

    )
}