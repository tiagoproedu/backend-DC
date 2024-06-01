require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

app.use(errorHandlerMiddleware);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
