import './Card.css'
import {ReactNode} from "react";

interface CardProps {
    className: string;
    children: ReactNode;
}

const Card = (cardProps: CardProps) => {
    const classes = "card " + cardProps.className
    return (
        <div className={classes}>{cardProps.children}</div>
    )
}

export default Card