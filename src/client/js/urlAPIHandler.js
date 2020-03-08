function urlAPI(evaluateURL) {

    let html = '';

    if (evaluateURL == '') {
        return false;
    }

    fetch('http://localhost:8081/evalURL?url='+evaluateURL)
    .then(resp => resp.json()) 
    .then(function(resp){
        if (resp.result === 'Success') {
            html = `<p>Your URL has a polarity of <strong>${resp.polarity}</strong> and a subjectivity of <strong>${resp.subjectivity}</strong></p>`;
            EvaluateAPI.displayResultToHTML('#urlResults', html);
        } else {
            html = `<p>Error getting Sentiment from Aylien API</p>`;
            EvaluateAPI.displayResultToHTML('#urlResults', html);
        }
    });

    return true;

}

export { urlAPI }

module.exports = urlAPI;

