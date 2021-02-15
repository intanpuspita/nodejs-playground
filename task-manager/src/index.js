const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const app = express();
const port = process.env.PORT || 3000;

// parse incoming json to an object, so it can be accessed
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server running on port ' + port);
});

// const User = require('../models/user');
// function main(){
//     user = 
//     user.populate('tasks').execPopulate();
// }