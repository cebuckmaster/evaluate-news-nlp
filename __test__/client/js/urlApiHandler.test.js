const urlAPI = require('../../../src/client/js/urlAPIHandler');

const fetchMock = require('fetch-mock');

import "babel-polyfill"

describe('urlAPIFetch', () => {
    it('can fetch', async () => {

        fetchMock.get('http://fake.com', {result: 'Success'});
        const response = await urlAPI("http://fake.com");
        const result = await resp.json()

        expect(resp.result).toEqual('Success');

    });
});

// test('Testing Aylien URL API', () => {
//     expect(urlAPI()).toBe('Good Response');
// });