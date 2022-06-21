import './NewExpense.css'
import ExpenseForm, {EnteredExpenseData} from "./ExpenseForm";
import {useState} from "react";

interface NewExpenseProps {
    onAddExpense: (action: EnrichedExpenseData) => void;
}

const NewExpense = (newExpenseProps: NewExpenseProps) => {
    const saveExpenseDataHandler = (enteredExpenseData: EnteredExpenseData) => {
        const enrichedExpenseData: EnrichedExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        newExpenseProps.onAddExpense(enrichedExpenseData)
        setIsEditing(false)
    }

    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }


    return (
        <div className="newexpense">
            {!isEditing && <button onClick={startEditingHandler} type="button">Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export type EnrichedExpenseData = {
    id: string
    title: string,
    amount: number,
    date: Date
}

export default NewExpense