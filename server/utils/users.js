class Users {
    constructor() {
        this.users = [];
    }

    addUser (id, name, room) {
        var user = {id, name, room};
        
        if (this.users.find(user => user.id === id)) {
            return;
        }

        this.users.push(user);

        return user;
    }

    removeUser(id) {
        const removedUser = this.users.find(user => user.id === id);
        
        if(removedUser) {
            this.users = this.users.filter(user => user.id !== id);
        }        

        return removedUser;
    }

    getUser(id) {
        return this.users.find(user => user.id === id);
    }

    getUserByName(name, room) {
        return this.users.find(user => {
            return user.name.toLowerCase() === name.toLowerCase() && user.room.toLowerCase() === room.toLowerCase();
        });
    } 

    getUserList(room) {
        const users = this.users.filter(user => {
            return user.room.toLowerCase() === room.toLowerCase()
        });
        
        return users.map(user => user.name);
    }
}

module.exports = { Users };