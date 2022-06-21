import Chart from "../Chart/Chart";
import {EnrichedExpenseData} from "../NewExpense/NewExpense";


interface ExpensesChartProps {
    expenses: EnrichedExpenseData[]
}

const ExpensesChart = (expensesChartProps: ExpensesChartProps) => {
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Dec', value: 0}
    ]

    for (const expense of expensesChartProps.expenses) {
        const expensesMonth = expense.date.getMonth(); // starting av 0 => January
        chartDataPoints[expensesMonth].value += expense.amount;
    }

    return (
        <Chart dataPoints={chartDataPoints}/>
    )
}

export default ExpensesChart