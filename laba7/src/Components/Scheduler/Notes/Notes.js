import React, {useState} from 'react';
import './form.css'

import {NotesList} from "./NotesList";
import {Form} from "./Form";

export const Notes = ({date,notes,setNotes}) => {


    if (date)
    return (
        <>
            <Form notes={notes} setNotes={setNotes} date={date}/>
            <NotesList notes = {
                notes.filter(note => note.noteDate.valueOf() === date.valueOf())
            }/>
        </>
    );
    else return null;
}

