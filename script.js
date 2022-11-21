const catFactContainer = document.getElementById('fact-container');
const catFactText = document.getElementById('fact');
const twitterBtn = document.getElementById('twitter');
const newCatFactBtn = document.getElementById('new-fact');

async function fetchCatFact() {
    const apiUrl = 'https://catfact.ninja/fact';
        try {
            const res = await fetch(apiUrl);
            dataCat = await res.json();
            if(dataCat.fact.length > 100) {
                catFactText.classList.add('fact-text-long')
            } else {
                catFactText.classList.remove('fact-text-long')
            }
            catFactText.textContent = dataCat.fact;
        } catch (e) {
            console.log(e)
        }
}

function tweetCatFact() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${catFactText.textContent}`;
    window.open(twitterUrl, '_blank');
}

newCatFactBtn.addEventListener('click', fetchCatFact);
twitterBtn.addEventListener('click', tweetCatFact);

fetchCatFact();