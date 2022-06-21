import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses"
import NewExpense, {EnrichedExpenseData} from "./components/NewExpense/NewExpense";

const toiletpaper: EnrichedExpenseData = {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 22.5,
    date: new Date(2020, 5, 28)
}

const newtv: EnrichedExpenseData = {
    id: 'e2',
    title: 'New Tv',
    amount: 499.99,
    date: new Date(2021, 3, 28)
}

const carInsuranse: EnrichedExpenseData = {
    id: 'e3',
    title: 'Car insuranse',
    amount: 266.5,
    date: new Date(2022, 8, 28)
}

const newDesk: EnrichedExpenseData = {
    id: 'e4',
    title: 'New desk',
    amount: 533.53,
    date: new Date(2022, 6, 29)
}

const dummyExpenses =
    [toiletpaper, newtv, carInsuranse, newDesk]


const App = () => {
    const [expenses, setExpenses] = useState(dummyExpenses)

    const addExpenseHandler = (enrichedExpenseData: EnrichedExpenseData) => {
        setExpenses(prevExpenses => {
            return [enrichedExpenseData, ...prevExpenses]
        })
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}></Expenses>
        </div>
    );
}

export default App;
