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
        if(!formSubmit(document.querySelector('#textToCheck').value, document.querySelector('#urlToCheck').value)) {
            alert('You must enter in some text or a URL for evaluation');
        };
    });

});

//-------------------------------------------------------------------------------------
function formSubmit(textToCheck, urlToCheck) {

    if (textToCheck === '' && urlToCheck === '') {
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
export { formSubmit }

module.exports = formSubmit;
