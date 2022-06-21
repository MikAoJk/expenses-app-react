import React from "react";
import './ExpensesItem.css'
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";

interface ExpenseItemProps {
    id: string;
    title: string
    amount: number
    date: Date
}


const ExpensesItem = (expenseItemProps: ExpenseItemProps) => {
    // This is now a stateless component/ dumb component/ presentational component
    // Due to it no longer has any state
    return (
        <li>
            <Card className="expense-item">
                <ExpensesDate date={expenseItemProps.date}/>
                <div className="expense-item__description">
                    <h2>{expenseItemProps.title}</h2>
                    <div className="expense-item__price">${expenseItemProps.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpensesItem