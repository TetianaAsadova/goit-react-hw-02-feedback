import { nanoid } from 'nanoid';
import React, { Component } from "react";
import './Counter.css';

class FeedbackOptions extends Component {
    state = {
        id: nanoid(),
        good: 0,
        neutral: 0,
        bad: 0,
    }
   
    handleButton = ([option]) => {
        console.log(`option`, option);
        this.setState(prevState =>({
            [option]: prevState[option] + 1,  
        }))
           return;
        console.log(`state`, this.state);  
    }

     handleSubmit = event => {
        event.preventDefault();
        console.log(`this.state`, this.state);
        this.props.onLeaveFeedback(this.state);
    }
          
    // render() {
    //     return (
    //     <div>
    //         <form onSubmit={this.handleSubmit}>
    //             <ul className="feedback__buttons">
    //                 {this.props.options.map(option => (
    //                 <li key={this.state.id}>
    //                     <button
    //                         type="button"
    //                         className="button"
    //                         onClick={this.handleButton([option])}
    //                         >{[option]}</button>
    //                 </li>
    //             ))}
    //         </ul>            
    //         </form>
    //     </div>
    //     )
    // }
    


    // <div className="css.feedback__buttons">
    //     <button
    //         type="button"
    //         className="css.button"
    //         onClick={good}
    //     >Good</button>
    //     <button
    //         type="button"
    //         className="css.button"
    //         onClick={neutral}
    //     >Neutral</button>
    //     <button
    //         type="button"
    //         className="css.button"
    //         onClick={bad}
    //     >Bad</button>
    // </div>
}

export default FeedbackOptions;