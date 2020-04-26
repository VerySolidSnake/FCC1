const quotes={
    James_Baldwin:"People are trapped in history and history is trapped in them.",
    David_McCullough:"History is who we are and why we are the way we are.",
    James_Baldwin:"I am what time, circumstance, history, have made of me, certainly, but I am also, much more than that. So are we all.",
    Mahatama_Gandhi:"A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.",
    Martin_Luther:"Blood alone moves the wheels of history.",
    Marcus_Garvey:"A people without the knowledge of their past history, origin and culture is like a tree without roots.",
    David_Miliband:"I do not speak Hebrew, but I understand that it has no word for ‘history’. The closest word for it is memory.",
    Percy_Bysshe_Shelley:"Fear not for the future, weep not for the past.",
    Kurt_Vonnegut:"History is merely a list of surprises. It can only prepare us to be surprised yet again.",
    Saul_Alinsky:"History is a relay of revolutions."
}
const authors=Object.keys(quotes);
console.log(authors);
let random=Math.round(Math.random()*(authors.length-1));
console.log(random);
let buttonDisabled=true;
$("document").ready(()=>{
$("#text").html(quotes[authors[random]]);
$("#author").html("-"+authors[random].split("_").join(" "));
$("#next-quote").click(()=>{
    if(!buttonDisabled){
        return;
    }
    else{
    buttonDisabled=false;
    $("body").css("background-color","rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")");
    let nRandom=Math.round(Math.random()*(authors.length-1));
    while(nRandom===random){
        nRandom=Math.round(Math.random()*(authors.length-1));
    }
    random=nRandom;
    console.log(nRandom)
    $("#text,#author").css("opacity","0");
    setTimeout(()=>{
        $("#text").html(quotes[authors[random]]);
        $("#author").html("-"+authors[random].split("_").join(" "));
        $("#text,#author").css("opacity","1");
    },800);
    buttonDisabled=true;
}
});
});