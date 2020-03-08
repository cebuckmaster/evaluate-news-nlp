const urlAPI = require('../../../src/client/js/urlAPIHandler');

test('Testing Aylien URL API', () => {
    expect(urlAPI('')).toBe(false);
});