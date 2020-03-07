'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', () => {
    //         navigator.serviceWorker.register('service-worker.js');
    //     });
    // }

    const frmSubmit = document.querySelector('#frmNLP');

    frmSubmit.addEventListener('submit', () => {
        formSubmit(document.querySelector('#textToCheck').value, document.querySelector('#urlToCheck').value);
    });

});

//-------------------------------------------------------------------------------------
function formSubmit(textToCheck, urlToCheck) {
    event.preventDefault();

    if (textToCheck === '' && urlToCheck === '') {
        alert('You must enter in some text or a URL for evaluation');
        return;
    }

    if (textToCheck != '') {
        console.log('*** Checking Text ****');
        EvaluateAPI.textAPI(textToCheck);
    }

    if (urlToCheck != '') {
        console.log('*** Checking url ****');
        EvaluateAPI.urlAPI(urlToCheck);
    }


}