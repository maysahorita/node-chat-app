const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {

    beforeEach(() => {
        users = new Users();

        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Maysa',
            room: 'The Office Fans'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([resUser]);
    });

    it('should remove a user', () => {
        const removeUser =  {
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        };
        expect(users.removeUser(removeUser.id)).toEqual(removeUser);
    });

    it('should not remove user', () => {
        const removeUser =  {
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        };
        expect(users.removeUser('2')).not.toEqual(removeUser);
    });

    it('should find user', () => {
        const findUser =  {
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        };

        expect(users.getUser(findUser.id)).toEqual(findUser);
    });

    it('should not find user', () => {
        expect(users.getUser('4')).toBe(undefined);
    });

    it('should return names for node course', () => {
        expect(users.getUserList('Node Course')).toEqual(['Mike', 'Julie'])
    })

    it('should return names for react course', () => {
        expect(users.getUserList('React Course')).toEqual(['Jen'])
    })
})