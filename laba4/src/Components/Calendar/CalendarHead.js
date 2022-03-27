import React, {useState} from "react";

export const CalendarHead = ({setDate}) => {

    const [date, changeDate] = useState(new Date());
    const
        monthNames = [
            "Январь",
            "Февраль",
            "Mарт",
            "Aпрель",
            "Mай",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ];
    const dayNames = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

    const prevMonth = () => {
        let currentDate = new Date(
            date.getFullYear(),
            date.getMonth() - 1
        );
        changeDate(currentDate);
        setDate(currentDate);

    };
    const nextMonth = () => {
        let currentDate = new Date(
            date.getFullYear(),
            date.getMonth() + 1
        );
        changeDate(currentDate);
        setDate(currentDate);
    };

    return (
        <>
            <thead>

            <tr>
                <td colSpan={5}>
                    {monthNames[date.getMonth()]+" "}
                    {date.getFullYear()}
                </td>
                <td>
                    <button onClick={prevMonth
                    }>{"<"}</button>
                </td>
                <td>
                    <button onClick={nextMonth}>{">"}</button>
                </td>


            </tr>
            <tr>
                {dayNames.map((name) => (
                    <td key={name}>{name}</td>
                ))}
            </tr>
            </thead>

        </>
    );


}
