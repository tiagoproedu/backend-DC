const AuthService = require('../services/AuthService');

class AuthController {
    async login(req, res) {
        const { email, password } = req.body;
        const token = AuthService.login(email, password);
        if (token) {
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }

    async register(req, res) {
        const { name, email, password, role } = req.body;
        const user = AuthService.register(name, email, password, role);
        res.json(user);
    }

    async resetPassword(req, res) {
        const { email, newPassword } = req.body;
        const result = AuthService.resetPassword(email, newPassword);
        if (result) {
            res.json({ message: 'Password reset successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }
}

module.exports = new AuthController();
