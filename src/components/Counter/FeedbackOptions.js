import React from "react";
import './Counter.css';

const FeedbackOptions = ({ good, neutral, bad }) => (
    
    <div className="css.feedback__buttons">
        <button
            type="button"
            className="css.button"
            onClick={good}
        >Good</button>
        <button
            type="button"
            className="css.button"
            onClick={neutral}
        >Neutral</button>
        <button
            type="button"
            className="css.button"
            onClick={bad}
        >Bad</button>
    </div>
)

export default FeedbackOptions;