import React from "react";
import './Counter.css';

class Counter extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
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

    countTotalFeedback = () => {
        const { total } = (this.state.good + this.state.neutral + this.state.bad);
        console.log(`total`, { total });
        return { total };
    }
    countPositiveFeedbackPercentage = () => {

    }

    render() {
        return (
            <div className="feedback">
                
                
                <Section title="Please leave feedback"></Section>

                <Statistics good={ this.state.good } neutral={ this.state.neutral } bad={ this.state.bad } total={ this.countTotalFeedback } positivePercentage={ } />
                <FeedbackOptions options={ } onLeaveFeedback={ }/>
                
            </div>
        )
    }
}

export default Counter;





