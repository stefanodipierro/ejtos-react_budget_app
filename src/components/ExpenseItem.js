
import React, { useContext } from 'react';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'SUBTRACT_EXPENSE',
            payload: expense
        });

    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button className="btn btn-success" onClick={event => increaseAllocation(props.name)}><FontAwesomeIcon icon={faPlus} /></button></td>
        <td><button className="btn btn-danger" onClick={event => decreaseAllocation(props.name)}><FontAwesomeIcon icon={faMinus} /></button></td>
        </tr>
    );
};

export default ExpenseItem;