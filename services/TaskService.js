const TaskRepository = require('../repositories/TaskRepository');

class TaskService {
    getAllTasks() {
        return TaskRepository.findAll();
    }

    getTaskById(id) {
        return TaskRepository.findById(id);
    }

    createTask(taskData) {
        return TaskRepository.create(taskData);
    }

    updateTask(id, taskData) {
        return TaskRepository.update(id, taskData);
    }

    deleteTask(id) {
        return TaskRepository.delete(id);
    }
}

module.exports = new TaskService();
