function textAPI(evaluateText) {

    const data = {
        text: evaluateText
    };

    fetch('http://localhost:8081/evalText?text='+evaluateText)
    .then(resp => resp.json()) 
    .then(function(resp){
        console.log(resp);
        const result = document.querySelector('#textResults');
        if (resp.result === 'Success') {
            result.innerHTML = `<p>Your Text message of "${evaluateText}" has a polarity of <strong>${resp.polarity}</strong> and a subjectivity of <strong>${resp.subjectivity}</strong></p>`;
        } else {
            result.innerHTML = `<p>Error getting Sentiment from Aylien API</p>`;
        }
    });

}


export { textAPI }
