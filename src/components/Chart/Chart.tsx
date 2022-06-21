import './Chart.css'
import ChartBar from "./ChartBar";

interface ChartProps {
    dataPoints: Datapoints[];
}

const Chart = (chartProps: ChartProps) => {
    const totalOfValues =  chartProps.dataPoints.reduce((number,dataPoints) =>  number + dataPoints.value, 0 )

    return (
        <div className="chart">
            {chartProps.dataPoints.map(dataPoints =>
                <ChartBar
                    key={dataPoints.label}
                    value={dataPoints.value}
                    totalOfValues={totalOfValues}
                    label={dataPoints.label}/>
            )}
        </div>
    )
}

export type Datapoints = {
    value: number
    label: string
}

export default Chart