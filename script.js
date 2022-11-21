const catFactContainer = document.getElementById('fact-container');
const catFactText = document.getElementById('fact');
const twitterBtn = document.getElementById('twitter');
const newCatFactBtn = document.getElementById('new-fact');

let dataCat = '';

function newCatFact() {
    const catFact = dataCat;
    if(catFact.fact.length > 100) {
        catFactText.classList.add('fact-text-long')
    } else {
        catFactText.classList.remove('fact-text-long')
    }
    catFactText.textContent = catFact.fact;
}

async function fetchCatFact() {
    const apiUrl = 'https://catfact.ninja/fact';
        try {
            const res = await fetch(apiUrl);
            dataCat = await res.json();
            console.log(dataCat);
            newCatFact();
        } catch (e) {
            console.log(e)
        }
}

function tweetCatFact() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${catFactText.textContent}`;
    window.open(twitterUrl, '_blank');
}

fetchCatFact();