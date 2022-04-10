import {useState} from "react";

export function Form({notes, setNotes, date}) {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const addButtonHandler = (e) => {
        setNotes([...notes, {
            noteDate: date,
            noteTitle: title,
            noteDesc: text
        }])
    }

    const deleteAllButtonHandler = (e) => {
        setNotes(notes.filter(note => note.noteDate.valueOf() !== date.valueOf()));
    }

    const deleteFirstNoteButtonHandler = (e) => {
        const noteToDelete = notes.find(note => note.noteDate.valueOf() === date.valueOf());
        //remove according to title and description
        setNotes(notes.filter(note => note.noteDate.valueOf() !== date.valueOf() || note.noteTitle !== noteToDelete.noteTitle || note.noteDesc !== noteToDelete.noteDesc));
        
    }
    const deleteLastNoteButtonHandler = (e) => {
        const noteToDelete = notes.reverse().find(note => note.noteDate.valueOf() === date.valueOf());
        //remove according to title and description
        setNotes(notes.filter(note => note.noteDate.valueOf() !== date.valueOf() || note.noteTitle !== noteToDelete.noteTitle || note.noteDesc !== noteToDelete.noteDesc));
    }


    return (

        <form className="myNoteForm">

            <div className="date">{date.toLocaleDateString()}</div>

            <input className="myInput" type="text" placeholder="title"
                   value={title} onChange={(event => setTitle(event.target.value))}
            />

            <textarea className="myInput myTextarea"
                      value={text} onChange={(event => setText(event.target.value))}
                      placeholder="description"
            />


            <div className="buttons">
                <input type="button" className="button" onClick={addButtonHandler} value="Add Note"/>
                <input type="button" className="button" onClick={deleteAllButtonHandler} value="Delete all"/>
                <input type="button" className="button" onClick={deleteFirstNoteButtonHandler} value="Delete first"/>
                <input type="button"  className="button" onClick={deleteLastNoteButtonHandler} value="Delete last   "/>
            </div>


        </form>

    );
}