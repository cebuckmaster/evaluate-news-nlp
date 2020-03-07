//-----------------------------------------
function urlAPI(evaluateURL) {

    fetch('http://localhost:8081/evalURL?url='+evaluateURL)
    .then(resp => resp.json()) 
    .then(function(resp){
        console.log(resp);
        const result = document.querySelector('#urlResults');
        if (resp.result === 'Success') {
            result.innerHTML = `<p>Your URL has a polarity of <strong>${resp.polarity}</strong> and a subjectivity of <strong>${resp.subjectivity}</strong></p>`;
        } else {
            result.innerHTML = `<p>Error getting Sentiment from Aylien API</p>`;
        }
    });


}

export { urlAPI }