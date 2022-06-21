import './ExpenseForm.css'
import {ChangeEvent, FormEvent, useState} from "react";

interface ExpenseFormProps {
    onSaveExpenseData: (action: EnteredExpenseData) => void;
    onCancel: () => void;
}


const ExpenseForm = (expenseFormProps: ExpenseFormProps) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value)

    }

    const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const expenseData: EnteredExpenseData = {
            title: enteredTitle,
            amount: Number(enteredAmount),
            date: new Date(enteredDate)
        }

        expenseFormProps.onSaveExpenseData(expenseData)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31"
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={expenseFormProps.onCancel} type="button">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export type EnteredExpenseData = {
    title: string,
    amount: number,
    date: Date
}

export default ExpenseForm