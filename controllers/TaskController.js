const TaskService = require('../services/TaskService');

class TaskController {
    async getAllTasks(req, res) {
        const tasks = TaskService.getAllTasks();
        res.json(tasks);
    }

    async createTask(req, res) {
        const taskData = req.body;
        const task = TaskService.createTask(taskData);
        res.json(task);
    }

    async updateTask(req, res) {
        const { id } = req.params;
        const taskData = req.body;
        const task = TaskService.updateTask(id, taskData);
        res.json(task);
    }

    async deleteTask(req, res) {
        const { id } = req.params;
        TaskService.deleteTask(id);
        res.status(204).end();
    }
}

module.exports = new TaskController();
