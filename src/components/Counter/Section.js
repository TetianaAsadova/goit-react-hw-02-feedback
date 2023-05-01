import React from "react";
import './Counter.css';

const Section = ({ title, children }) => (
    <div>
        <p className="css.feedback__title">{title}</p>
        {children}
    </div>    
)

export default Section;