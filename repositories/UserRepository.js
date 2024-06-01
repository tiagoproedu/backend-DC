const users = [];
let currentId = 1;

class UserRepository {
    findAll() {
        return users;
    }

    findById(id) {
        return users.find(user => user.id === parseInt(id));
    }

    create(userData) {
        const user = { id: currentId++, ...userData };
        users.push(user);
        return user;
    }

    update(id, userData) {
        const index = users.findIndex(user => user.id === parseInt(id));
        if (index !== -1) {
            users[index] = { ...users[index], ...userData };
            return users[index];
        }
        return null;
    }

    delete(id) {
        const index = users.findIndex(user => user.id === parseInt(id));
        if (index !== -1) {
            users.splice(index, 1);
        }
    }
}

module.exports = new UserRepository();
