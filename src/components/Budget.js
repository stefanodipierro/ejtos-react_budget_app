import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const handleBudgetSubmit = () => {
        const budgetNumber = parseInt(newBudget, 10);
        
        if (budgetNumber > 20000) {
            alert("Budget cant be over 20000.");
            return;
        }
        
        dispatch({ type: 'SET_BUDGET', payload: budgetNumber });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}
                onBlur={handleBudgetSubmit}
            />
        </div>
    );
};

export default Budget;
