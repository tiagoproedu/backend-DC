class Task {
    constructor(id, title, description, completed, userId, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.userId = userId;
        this.priority = priority;
    }
}

module.exports = Task;
