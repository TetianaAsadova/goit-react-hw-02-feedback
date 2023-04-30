import React from "react";
import './Counter.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
        <p className="feedback__stat">Statistics</p>
        <div className="feedback__counter">
            <p>Good:  {good}</p>
            <p>Neutral:  {neutral}</p>
            <p>Bad:  {bad}</p>
            <p>Total:  {total}</p>
            <p>Positive feedback:  {positivePercentage}</p>
        </div>
    </div>
)

export default Statistics;