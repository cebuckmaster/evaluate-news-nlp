const textAPI = require('../../../src/client/js/textAPIHandler');

test('Testing Aylien Text API', () => {
    expect(textAPI('')).toBe(false);
});