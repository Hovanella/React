import "./NotesList.css"

export const NotesList = ({notes}) => {


    let className;
    notes.length === 0 ? className ="NotesList" : className = "NotesList NotEmpty";

    return (
        <ul className={className}>
            {notes.map(note =>
                <li className="note" key={note.title + note.desc}>
                <div className="title">{note.noteTitle}  </div>
                 <div className="description"> {note.noteDesc}</div>
            </li>)}
        </ul>
    );
}