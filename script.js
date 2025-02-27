/*
 .----------------.  .----------------.  .-----------------. .-----------------. .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
| | ____    ____ | || |      __      | || | ____  _____  | || | ____  _____  | || |      __      | || |  _________   | || |  ____  ____  | |
| ||_   \  /   _|| || |     /  \     | || ||_   \|_   _| | || ||_   \|_   _| | || |     /  \     | || | |  _   _  |  | || | |_   ||   _| | |
| |  |   \/   |  | || |    / /\ \    | || |  |   \ | |   | || |  |   \ | |   | || |    / /\ \    | || | |_/ | | \_|  | || |   | |__| |   | |
| |  | |\  /| |  | || |   / ____ \   | || |  | |\ \| |   | || |  | |\ \| |   | || |   / ____ \   | || |     | |      | || |   |  __  |   | |
| | _| |_\/_| |_ | || | _/ /    \ \_ | || | _| |_\   |_  | || | _| |_\   |_  | || | _/ /    \ \_ | || |    _| |_     | || |  _| |  | |_  | |
| ||_____||_____|| || ||____|  |____|| || ||_____|\____| | || ||_____|\____| | || ||____|  |____|| || |   |_____|    | || | |____||____| | |
| |              | || |              | || |              | || |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------' 

*/

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- by "+ author.innerHTML, "Tweet Window", "height=300, width=600");
}