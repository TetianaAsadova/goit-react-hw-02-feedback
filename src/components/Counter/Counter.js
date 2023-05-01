import React, { Component } from "react";
// import PropTypes from 'prop-types';
import './Counter.css';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';


class Counter extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleGoodButton = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    }

    handleNeutralButton = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
    }

    handleBadButton = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
    }

    countTotalFeedback = (total) => {
        total = (this.state.good + this.state.neutral + this.state.bad);
        console.log(`total`, total);
        return total;
    }

    countPositiveFeedbackPercentage = (positivePercentage) => {
        console.log(`positivePercentage1`, positivePercentage);
        (this.state.good + this.state.neutral + this.state.bad) === 0 ? positivePercentage = 0 :
        positivePercentage = ((this.state.good * 100) / (this.state.good + this.state.neutral + this.state.bad)).toFixed(2);
        console.log(`positivePercentage2`, positivePercentage);
        return positivePercentage;
    }

    render() {
        let total = 0;
        let positivePercentage = 0;

        return (
            <div className="feedback">                
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={this.state}
                        onLeaveFeedback={ }
                    />
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback(total)}
                        positivePercentage={this.countPositiveFeedbackPercentage(positivePercentage)}
                    />
                </Section>
                {/* <div className="css.feedback__buttons">
                    <button
                        type="button"
                        className="css.button"
                        onClick={this.handleGoodButton}
                    >Good</button>
                    <button
                        type="button"
                        className="css.button"
                        onClick={this.handleNeutralButton}
                    >Neutral</button>
                    <button
                        type="button"
                        className="css.button"
                        onClick={this.handleBadButton}
                    >Bad</button>
                </div> */}
                {/* <div>
                    <p className="css.feedback__stat">Statistics</p>
                    <div className="css.feedback__counter">
                        <p>Good:  {this.state.good}</p>
                        <p>Neutral:  {this.state.neutral}</p>
                        <p>Bad:  {this.state.bad}</p>
                        <p>Total:  {this.countTotalFeedback(total)}</p>
                        <p>Positive feedback:  {this.countPositiveFeedbackPercentage(positivePercentage)}%</p>
                    </div>
                </div> */}    
            </div>
        )
    }
}

export default Counter;





