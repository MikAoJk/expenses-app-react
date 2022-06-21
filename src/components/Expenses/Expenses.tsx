import React, {useState} from "react";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (expenses: ExpensesProps) => {

    const [filteredYear, setFilteredYear] = useState('2022')

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpensesByYear = expenses.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })


    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpensesByYear}/>
            <ExpensesList items={filteredExpensesByYear}></ExpensesList>
        </Card>
    )
}
export default Expenses