import React from "react";

function QuoteDisplay(props){
    return (<div>
        <p>{props.quote}</p>
        <p><strong>{props.author}</strong></p>
    </div>)
}

export default QuoteDisplay;