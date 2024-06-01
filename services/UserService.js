const UserRepository = require('../repositories/UserRepository');

class UserService {
    getAllUsers() {
        return UserRepository.findAll();
    }

    getUserById(id) {
        return UserRepository.findById(id);
    }

    updateUser(id, userData) {
        return UserRepository.update(id, userData);
    }

    deleteUser(id) {
        return UserRepository.delete(id);
    }
}

module.exports = new UserService();
