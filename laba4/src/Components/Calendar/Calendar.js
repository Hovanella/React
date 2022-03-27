import React, {useState} from "react";
import {CalendarBody} from "./CalendarBody";
import {CalendarHead} from "./CalendarHead";

export const Calendar = () => {

    let [date, setDate] = useState(new Date());
    let [selectedDays, setSelectedDays] = useState([]);

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

    return (
        <table>
            <CalendarHead setDate={setCurrentDate}/>
            <CalendarBody date = {date} setSelectedDays = {selectDays} selectedDays = {selectedDays}/>
        </table>



    );




}