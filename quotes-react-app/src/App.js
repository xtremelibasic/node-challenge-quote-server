import logo from './logo.svg';
import { useState } from 'react';
import RandomQuoteBtn from './RandomQuoteBtn';
import axios from "axios";
import QuoteDisplay from './QuoteDisplay';
import './App.css';


function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  function createQuote(){
    axios.get("http://localhost:5000/quotes/random")
    .then((res) => {
      console.log(res);
      setQuote(res.data.quote);
      setAuthor(res.data.author)
    })
  }

  return (
    <div>
      <div className="App">
        <QuoteDisplay quote={quote} author={author} />
        <RandomQuoteBtn  handleClick={createQuote} />
        
      </div>
      <footer>by Amanda Nwadukwe, 2021</footer>
    </div>
  );
}

export default App;
