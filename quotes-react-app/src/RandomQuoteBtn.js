import React from "react";


function RandomQuoteBtn(props){
   return  <button className="create-quote-btn" type="button" onClick={props.handleClick}>Create Random Quote</button>
}

export default RandomQuoteBtn;