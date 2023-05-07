import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
        <p className="feedback__stat">Statistics</p>
        {((good !== 0) || (neutral !== 0) || (bad !== 0)) ?
            <div className="feedback__counter">
                <p>Good:  {good}</p>
                <p>Neutral:  {neutral}</p>
                <p>Bad:  {bad}</p>
                <p>Total:  {total}</p>
                <p>Positive feedback:  {positivePercentage}%</p>
            </div> :
            <div>
                <Notification message="There is no feedback"/>
             </div>   
        }
    </div>
)

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}

export default Statistics;