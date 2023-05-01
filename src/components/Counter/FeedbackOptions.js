import React from "react";
import './Counter.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    // console.log(options)
    <div className="css.feedback__buttons">
        <button
            type="button"
            className="css.button"
            onClick={options.good}
        >Good</button>
        <button
            type="button"
            className="css.button"
            onClick={options.neutral}
        >Neutral</button>
        <button
            type="button"
            className="css.button"
            onClick={options.bad}
        >Bad</button>
    </div>
)

export default FeedbackOptions;