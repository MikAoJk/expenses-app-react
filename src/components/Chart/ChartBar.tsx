import './ChartBar.css'

interface ChartBarProps {
    key: string
    value: number;
    totalOfValues: number;
    label: string;
}

const ChartBar = (chartBarProps: ChartBarProps) => {

    let barFillHeight = '0%'

    if (chartBarProps.totalOfValues > 0) {
        barFillHeight = Math.round((chartBarProps.value / chartBarProps.totalOfValues) * 100) + '%'
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">{chartBarProps.label}</div>
        </div>
    )
}

export default ChartBar