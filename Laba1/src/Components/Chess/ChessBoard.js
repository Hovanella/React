import {NumberChessNote} from "./NumberChessNote";

export const ChessBoard = () =>{
   const board = [];

    for (let i = 0; i < 8; i+=2) {
        board.push(
            <tr>
                {NumberChessNote(i+1)}
                <td className="cell chessCell Odd"/>
                <td className="cell chessCell Even"/>
                <td className="cell chessCell Odd"/>
                <td className="cell chessCell Even"/>
                <td className="cell chessCell Odd"/>
                <td className="cell chessCell Even"/>
                <td className="cell chessCell Odd"/>
                <td className="cell chessCell Even"/>
                {NumberChessNote(i+1)}
                </tr>,
             <tr>
                {NumberChessNote(i+2)}
                <td className="cell chessCell Even"/>
                <td className="cell chessCell Odd"/>
                <td className="cell chessCell Even"/>
                <td className="cell chessCell Odd"/>
                <td className="cell chessCell Even"/>
                <td className="cell chessCell Odd"/>
                <td className="cell chessCell Even"/>
                <td className="cell chessCell Odd"/>
                {NumberChessNote(i+2)}
            </tr>
        );
    }
    return board;
}