const formSubmit = require('../../../src/client/js/nlpNews');

test('Entering blank for both inputs should error', () =>{
    expect(formSubmit('', '')).toBe(false);
});