const UserService = require('../services/UserService');

class UserController {
    async getAllUsers(req, res) {
        const users = UserService.getAllUsers();
        res.json(users);
    }

    async getUserById(req, res) {
        const { id } = req.params;
        const user = UserService.getUserById(id);
        res.json(user);
    }

    async updateUser(req, res) {
        const { id } = req.params;
        const userData = req.body;
        const user = UserService.updateUser(id, userData);
        res.json(user);
    }

    async deleteUser(req, res) {
        const { id } = req.params;
        UserService.deleteUser(id);
        res.status(204).end();
    }
}

module.exports = new UserController();
