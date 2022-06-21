import './ExpensesList.css'
import ExpensesItem from "./ExpensesItem";
import React from "react";
import {EnrichedExpenseData} from "../NewExpense/NewExpense";


interface ExpensesListProps {
    items: EnrichedExpenseData[];
}

const ExpensesList = (expensesListProps: ExpensesListProps) => {


    if (expensesListProps.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

    return (
        <ul className="expenses-list">
            {expensesListProps.items
                .map(expense =>
                    <ExpensesItem
                        key={expense.id}
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}/>)}
        </ul>
    )
}


export default ExpensesList