const quotes = require("./quotes.json");
const oneQuoteIdx = () => Math.floor(Math.random()*quotes.length)
const xQuotes = (x) => {
    let quote = "";
    let idx = oneQuoteIdx()
    for (let i =0; i < x; i++) {
        quote += quotes[idx+i] + "\n"
    }
    return quote
}
module.exports = { xQuotes };
