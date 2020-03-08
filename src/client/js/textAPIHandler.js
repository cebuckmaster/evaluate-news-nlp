function textAPI(evaluateText) {

    let html = '';

    if (evaluateText == '') {
        return false;
    }

    fetch('http://localhost:8081/evalText?text='+evaluateText)
    .then(resp => resp.json()) 
    .then(function(resp) {
        if (resp.result === 'Success') {
            html = `<p>Your Text message of "${evaluateText}" has a polarity of <strong>${resp.polarity}</strong> and a subjectivity of <strong>${resp.subjectivity}</strong></p>`;
            EvaluateAPI.displayResultToHTML('#textResults', html);
        } else {
            html = `<p>Error getting Sentiment from Aylien API</p>`;
            EvaluateAPI.displayResultToHTML('#textResults', html);
        }
    });

    return true;


}


export { textAPI }

module.exports = textAPI;

