import React, {useEffect, useState} from 'react';

const   InputNumber = ({numbers,id,setId}) => {


    const [number,setNumber] = useState(numbers[0])
    const [value, setValue] = useState("")

    useEffect(() => {
        setNumber(numbers[id - 1])
    }, [id])


    const inputNumber = (e) => {
        numbers.forEach(el => {
                if (value === el.code) {
                    setNumber(el)
                    setId(el.id)
                    console.log(el)
                }
            }
        )
        setValue(e.target.value.split(/[ \-()]/).join(""))

        if (+value.length === number.count) {
            let inputStr = value.split("");
            let maskArr = number.mask.split("");
            console.log(inputStr, maskArr)
            for (let i = 0, j = 0; i < maskArr.length; i++)
                if (maskArr[i] === "X") {
                    maskArr[i] = inputStr[j];
                    j++;
                }
            let num = maskArr.join("");
            setValue(num);
        }
    }


    return (
        <div className="inputWrapper">
            <input className="input" type="tel" id="phone" name="phone"
                   placeholder={number.code + number.mask.slice(4)}
                   required onInput={inputNumber} maxLength={number.count + 3}
                   value={value}/>

        </div>
    );
};

export default InputNumber;