import {SortTable} from "./Components/SortTable/SortTable";
import React, {useRef, useState} from "react";
import {content} from "./Components/SortTable/Content";

export const Catalog = () => {


    const [array, setArray] = useState(content);
    const [sorted, setSorted] = useState({name: true, price: true, inStock: true, discount: true});


    const sort = (byWhat) => {
        let direction = sorted[byWhat] ? 1 : -1,
            goodsCopy = [...array].sort(function (a, b) {
                if (a.new || b.new)
                    return 0
                if (a[byWhat] > b[byWhat]) {
                    return direction;
                }
                if (a[byWhat] < b[byWhat]) {
                    return direction * -1;
                }
                return 0;
            });
        sorted[byWhat] = !sorted[byWhat];
        setArray(goodsCopy);
    }
    const sorts = () => {
        return (
            <div className="sorts">
                <button onClick={() => sort("name")}>
                    Name
                </button>
                <button onClick={() => sort("price")}>
                    Price
                </button>
                <button onClick={() => sort("inStock")}>
                    In Stock
                </button>
                <button onClick={() => sort("discount")}>
                    Discount
                </button>
            </div>
        );
    }
    const goods = () => {
        return array.map((item) => {
            return (
                <div className="one_good">
                    <img src={item.img} alt=""/>
                    <div className="text">
                        <h2>{item.name}</h2>
                        {item.new ? <div className="new">New</div> : null}
                        <div className="prices">
                            {item.discount && <h2>{(item.price * (100 - item.discount)) / 100}$</h2>}
                            <h3>{item.price}$</h3>
                        </div>
                        <h3>{item.inStock} items</h3>

                    </div>
                     <div className="description"><h3>Description:</h3><span className="description-text">{item.desc}</span></div>
                </div>
            );
        });
    }

    return (
        <>
            {sorts()}
            <div className="goods">
                {goods()}
            </div>
            <SortTable content={array}/>
        </>
    );
}
