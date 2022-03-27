import React, {useEffect, useState} from 'react';
import SwitchFlag from "./SwitchFlag";
import {OperatorsButtonList} from "./OperatorsButtonList";
import InputNumber from "./InputNumber/InputNumber";
import {NumberFormats} from "./NumberFormats";
import "./PhoneInput.css";

export const PhoneInput = () => {

    const [id, setId] = useState(1);


    return (
        <div className="container">
            <div className="phoneInput">
                <label>Input phone</label>
                <div className="content">
                    <InputNumber numbers={NumberFormats} id={id} setId={setId} onChange={()=>setId(this.number)}/>
                    <SwitchFlag id={id}/>
                </div>
            </div>

            <div className="countrySelect">
                <label>Select country</label>
                <select id="select" onChange={e => setId(+e.target.value)} style={{borderRadius: "5px"}}>
                    {NumberFormats.map(item =>
                        <option key={item.id} value={item.id} selected={id === item.id}>
                            {item.name}
                        </option>
                    )}
                </select>
            </div>

            <OperatorsButtonList numberFormats={NumberFormats} id={id}/>
        </div>
    );
};


