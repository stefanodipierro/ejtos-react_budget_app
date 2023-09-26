// Currency.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    
    const handleChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };

    return (
        <div>
            <label htmlFor="currency">Select Currency: </label>
            <select id="currency" value={currency} onChange={handleChange}>
                <option value="£">GBP</option>
                <option value="$">USD</option>
                <option value="€">EUR</option>
                {/* Puoi aggiungere altre opzioni di valuta qui */}
            </select>
        </div>
    );
};

export default Currency;
