import React from 'react';
import ReactDOM from 'react-dom';


import {HelloWorld} from "./Components/HelloWorld";
import {CurrentDate} from "./Components/CurrentDate";
import {Table} from "./Components/Table/Table";
import {Chess} from "./Components/Chess/Chess";


ReactDOM.render(
    <HelloWorld />,
  document.getElementById('helloWorld')
);
ReactDOM.render(
    <CurrentDate/>,
    document.getElementById('Date')
)
ReactDOM.render(
    <Table/>,
    document.getElementById('Table')
)

ReactDOM.render(
    <Chess/>,
    document.getElementById('Chess')
)


