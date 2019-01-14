var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message Object', () => {

        const from = 'maysa.horita@test.com';
        const text = 'Hi there!';
        const messageObject = generateMessage(from, text);

        expect(typeof messageObject.createdAt).toBe('number');
        expect(messageObject.from).toMatch(from);
        expect(messageObject.text).toMatch(text);
        
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'test@test.com'
        const latitude = '1';
        const longitude = '1';
        const messageObject = generateLocationMessage(from, latitude, longitude);
        const expectUrl = 'https://www.google.com.br/maps/place/';

        expect(typeof messageObject.createdAt).toBe('number');
        expect(messageObject.from).toMatch(from);
        expect(messageObject.url).toMatch(expectUrl);
    });
})