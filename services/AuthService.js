const UserRepository = require('../repositories/UserRepository');
const jwt = require('jsonwebtoken');
const emailService = require('../utils/emailService');

class AuthService {
    register(name, email, password, role) {
        const user = UserRepository.create({ name, email, password, role });
        emailService.sendEmail(email, 'Cadastro feito com sucesso!', 'Bem-vindo(a) ao sistema de teste do projeto do Node.js com Express!');
        return user;
    }

    login(email, password) {
        const user = UserRepository.findAll().find(user => user.email === email && user.password === password);
        if (user) {
            return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        }
        return null;
    }

    resetPassword(email, newPassword) {
        const user = UserRepository.findAll().find(user => user.email === email);
        if (user) {
            user.password = newPassword;
            emailService.sendEmail(email, 'Senha resetada com sucesso!', 'Sua senha foi resetada com sucesso!');
            return true;
        }
        return false;
    }
}

module.exports = new AuthService();
