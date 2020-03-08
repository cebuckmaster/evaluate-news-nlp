'use strict';

document.addEventListener('DOMContentLoaded', () => {

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
            .then( () =>  { console.log('Service Worker Registed'); });
        });
    }

    const frmSubmit = document.querySelector('#frmNLP');

    frmSubmit.addEventListener('submit', () => {
        formSubmit(document.querySelector('#textToCheck').value, document.querySelector('#urlToCheck').value);
    });

});

//-------------------------------------------------------------------------------------
function formSubmit(textToCheck, urlToCheck) {

    if (textToCheck === '' && urlToCheck === '') {
        alert('You must enter in some text or a URL for evaluation');
        return false;
    }

    event.preventDefault();

    if (textToCheck != '') {
        EvaluateAPI.textAPI(textToCheck);
    }

    if (urlToCheck != '') {
        EvaluateAPI.urlAPI(urlToCheck);
    }

    return true;

}
//------------------------------------------------------------------------------------------
function displayResultToHTML(id, html) {

    const result = document.querySelector(id);
    result.innerHTML = html;

}

export { displayResultToHTML }
