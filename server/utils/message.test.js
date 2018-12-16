var expect = require('expect');

var { generateMessage } = require('./message');

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