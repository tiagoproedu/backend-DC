const tasks = [];
let currentId = 1;

class TaskRepository {
    findAll() {
        return tasks;
    }

    findById(id) {
        return tasks.find(task => task.id === parseInt(id));
    }

    create(taskData) {
        const task = { id: currentId++, ...taskData };
        tasks.push(task);
        return task;
    }

    update(id, taskData) {
        const index = tasks.findIndex(task => task.id === parseInt(id));
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...taskData };
            return tasks[index];
        }
        return null;
    }

    delete(id) {
        const index = tasks.findIndex(task => task.id === parseInt(id));
        if (index !== -1) {
            tasks.splice(index, 1);
        }
    }
}

module.exports = new TaskRepository();
