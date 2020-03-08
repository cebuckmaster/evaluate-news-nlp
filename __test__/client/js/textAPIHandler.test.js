const textAPI = require('../../../src/client/js/textAPIHandler');

test('Testing Aylien Text API', () => {
    expect(textAPI("This should be a good Test")).toBe('Good Response');
});