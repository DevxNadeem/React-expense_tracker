import React, { useState } from 'react'
import './ExpenseTracker.css';


function ExpenseTracker() {
    const [input , setinput] = useState('');
    const [amount ,setamount] = useState('');
    const [expenses ,setexpenses] = useState([]);

    const handler =()=>{
        if(!input || !amount) return;

        const newexpense = {
            id : expenses.length +1,
            title : input,
            amount : amount

        }
        setexpenses([...expenses,newexpense]);
        setamount('');
        setinput('');

    }

    const deleteexpense =(id)=>{
            setexpenses(expenses.filter((expenses) => expenses.id !== id))
    }
  return (
    <div className="expense-tracker">
    <h2>Expense Tracker</h2>
    <div className="expense-inputs">
        <input type='text' placeholder='Expense' value={input} onChange={(e) => setinput(e.target.value)}/>
        <input type='number' placeholder='amount' value={amount} onChange={(e) => setamount(e.target.value)}/>
        <button onClick={handler}>Add</button>
    </div>
    <ul className='list'>
        {expenses.map((expenses)=>(
            <li key={expenses.id}>
                <span>{expenses.title}</span>
                <span>${expenses.amount}</span>
                <button onClick={()=>deleteexpense(expenses.id)}>delete</button>
            </li>
        ))}
    </ul>
</div>
  )
}

export default ExpenseTracker