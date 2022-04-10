import React from "react";
import "./CalendarBody.css";

export const CalendarBody = ({date, setSelectedDays, selectedDays,notes,noteDate}) => {

    const currentDate = new Date();

    const startDay = (date) => {
        let startDay;
        date.getDay() === 0 ? (startDay = 6) : (startDay = date.getDay() - 1);
        return startDay;
    }

    const oneMonth = (date) => {
        let fullMonth = [],
            day = 1 - startDay(date),
            month = date.getMonth(),
            year = date.getFullYear();
        for (let i = 0; i < 6; i++) {
            fullMonth[i] = [];
            for (let j = 0; j < 7; j++) {
                fullMonth[i][j] = new Date(year, month, day++);
            }
        }
        return fullMonth;
    }

    const styleTd = (weekDate, currentDate, date, selectedDays,notes) => {
        if (date.getMonth() !== weekDate.getMonth())
            return "NotCurrentMounthDate";


            if (noteDate !==null &&
                noteDate.getDate() === weekDate.getDate() &&
                noteDate.getMonth() === weekDate.getMonth() &&
                noteDate.getFullYear() === weekDate.getFullYear() )
                 return "selectedNoteDay";


        for (let i = 0; i < selectedDays.length; i++) {
            if (
                selectedDays[i].getDate() === weekDate.getDate() &&
                selectedDays[i].getMonth() === weekDate.getMonth() &&
                selectedDays[i].getFullYear() === weekDate.getFullYear()
            )
                return "selectedDate";
        }

        if (
            weekDate.getDate() === currentDate.getDate() &&
            weekDate.getMonth() === currentDate.getMonth() &&
            weekDate.getFullYear() === currentDate.getFullYear()
        )
            return "todayDate";
    };

    const selectDays = (weekDate) => {
        setSelectedDays(weekDate);
    };

    const newDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
    );

    return (
            <tbody>
            {oneMonth(newDate).map((week, index) => (
                <tr key={index}>
                    {week.map((weekDate, index) => (
                        <td
                            key={index}
                            className= {styleTd(
                                weekDate,
                                currentDate,
                                newDate,
                                selectedDays,
                                notes
                            )}
                            onClick={() => {
                                if (newDate.getMonth() === weekDate.getMonth())
                                    selectDays(weekDate);
                            }}
                        >
                            {weekDate.getDate()}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>

    )
}
