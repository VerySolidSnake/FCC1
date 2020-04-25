const autorQuote={
    Mahatma_Gandhi:'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    Friedrich_Nietzsche:"That which does not kill us makes us stronger.",
    Virginia_Satir:"We must not allow other people’s limited perceptions to define us.",
    Oscar_Wilde:"Be yourself; everyone else is already taken.",
    Napoleon_Hill:"If you cannot do great things, do small things in a great way."
};
const autorQuoteKeys=Object.keys(autorQuote);
let random=Math.round(Math.random()*(autorQuoteKeys.length-1));
const newText=autorQuote[autorQuoteKeys[random]];
const changeQuote=()=>{
    document.getElementById('text').innerHTML=autorQuote[autorQuoteKeys[random]];
    document.getElementById('author').innerHTML="-"+(autorQuoteKeys[random].split("_").join(" "));
}
window.onload=changeQuote();
const nextQuote=()=>{
    const c1=Math.round(Math.random()*255);
    const c2=Math.round(Math.random()*255);
    const c3=Math.round(Math.random()*255);
    const globalColor="rgb("+c1+","+c2+","+c3+")";
    console.log(c1,c2,c3)
    document.body.style.backgroundColor=globalColor;
    document.getElementById('new-quote').style.backgroundColor=globalColor;
    document.getElementById('tweet-quote').style.color=globalColor;
    document.getElementById('qt').style.color=globalColor;
    random=Math.round(Math.random()*(autorQuoteKeys.length-1));
    setTimeout(changeQuote(),2000);
}