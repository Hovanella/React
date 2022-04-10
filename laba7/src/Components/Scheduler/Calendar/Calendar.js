import React, {useState} from "react";
import "./Calendar.css";
import {CalendarHead} from "./CalendarHead";
import {CalendarBody} from "./CalendarBody";
import {Notes} from "../Notes/Notes";



export const Calendar = () => {

    let [date, setDate] = useState(new Date());
    let [selectedDays, setSelectedDays] = useState([]);
    let [noteDate, setNoteDate] = useState(null);
    let [notes, setNotes] = useState([]);

    const selectDays = (day) => {
        for (let i = 0; i < selectedDays.length; i++) {
            if (day.valueOf() === selectedDays[i].valueOf()) {
                if (noteDate!==null && day.valueOf() === noteDate.valueOf()) {
                    setSelectedDays([...selectedDays.slice(0, i), ...selectedDays.slice(i + 1),]);
                    setNoteDate(null);
                    return
                } else {
                    setNoteDate(day);
                    return;
                }
            }
        }
        setSelectedDays([...selectedDays, day]);
    };
    const setCurrentDate = (date) => setDate(date);


    return (
        <>
            <table className="item">
                <CalendarHead setDate={setCurrentDate}/>
                <CalendarBody date={date} setSelectedDays={selectDays} selectedDays={selectedDays}  noteDate = {noteDate}/>
            </table>
            <Notes date={noteDate} notes={notes} setNotes={setNotes} className="item"/>
        </>);
}