import React from "react";
import './ExpensesDate.css'

interface ExpenseDateProps {
    date: Date
}

const ExpensesDate = (expenseDateProps: ExpenseDateProps) => {
    const day = expenseDateProps.date.toLocaleString('en-US',{day: '2-digit'})
    const month = expenseDateProps.date.toLocaleString('en-US',{month: 'long'});
    const year = expenseDateProps.date.getFullYear()

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}

export default ExpensesDate