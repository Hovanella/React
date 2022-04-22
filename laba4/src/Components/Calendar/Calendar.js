import React, {useState} from "react";
import {CalendarBody} from "./CalendarBody";
import {CalendarHead} from "./CalendarHead";
import {Notes} from "../Notes/Notes";
import "./Calendar.css";

export const Calendar = () => {

    let [date, setDate] = useState(new Date());
    let [selectedDays, setSelectedDays] = useState([]);
    let [showForm, setShowForm] = useState(false);
    let [noteDate, setNoteDate] = useState(new Date());
    let [notes, setNotes] = useState([]);


    const selectDays = (day) => {
        for (let i = 0; i < selectedDays.length; i++) {
            if (
                day.valueOf() === selectedDays[i].valueOf()
            ) {
                setSelectedDays([
                    ...selectedDays.slice(0, i),
                    ...selectedDays.slice(i + 1),
                ]);
                return
            }
        }
        setSelectedDays([...selectedDays, day]);
    };
    const setCurrentDate = (date) => setDate(date);
    const addNotes = (notes) => {
        setNotes(notes);
        setShowForm(false);
    };
    const deleteAllNotes = () => {
        setNotes([]);
        /* зачем-то здесь меняют выбранные дни, а не Notes setSelectedDays([]);*/
    };

    return (
        <>
        <table>
            <CalendarHead setDate={setCurrentDate}/>
            <CalendarBody date = {date} setSelectedDays = {selectDays} selectedDays = {selectedDays} notes = {notes}/>
        </table>

       {/* <Notes date = {noteDate} showForm={showForm} addNotes = {addNotes} deleteAllNotes = {deleteAllNotes}/>*/}

        </>
    );




}