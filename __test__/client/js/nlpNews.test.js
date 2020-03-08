const formSubmit = require('../../../src/client/js/nlpNews');

describe('Testing formSubmit', () => {
    test('Entering blank for both inputs should error', () =>{
        expect(formSubmit('', '')).toBe(false);
    });
});
