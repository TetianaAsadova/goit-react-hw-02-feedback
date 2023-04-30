import React from "react";
import './Counter.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className="feedback__buttons">
        <button
            type="button"
            className="button"
            onClick={this.handleGoodButton}
        >Good</button>
        <button
            type="button"
            className="button"
            onClick={this.handleNeutralButton}
        >Neutral</button>
        <button
            type="button"
            className="button"
            onClick={this.handleBadButton}
        >Bad</button>
    </div>
)