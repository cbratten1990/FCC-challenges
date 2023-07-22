const { useState, useEffect } = React;

const RandomQuoteMachine = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const fetchRandomQuote = async () => {
        try {
            const response = await axios.get("https://api.quotable.io/random");
            const data = response.data;
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            console.log("Error fetching random quote:", error);
        }
    };

    const handleNewQuoteClick = () => {
        fetchRandomQuote();
    };
    return (
        <div id="quote-box" className="container text-center mt-5">
            <h1>Random Quote Machine</h1>
            <blockquote className="blockquote">
                <p id="text" className="mb-0">{quote}</p>
                <footer id="author" className="blockquote-footer mt-2">{author}</footer>
            </blockquote>
            <button id="new-quote" className="btn btn-primary" onClick={handleNewQuoteClick}>New Quote</button>
            <a id="tweet-quote" className="btn btn-info" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${quote} - ${author}`
      )}`} target="_blank">Tweet Quote</a>
        </div>
    );
};

ReactDOM.render(<RandomQuoteMachine/>, document.getElementById('root'));