require('../src/db/mongoose');
const Task = require('../src/models/task');

// 6024abac47b1f41beaea8479

// Task.findByIdAndDelete('6024b2850dc5f81e3862f59a')
//     .then((task) => {
//         console.log(task);
//         return Task.countDocuments({ completed: false })
//     }).then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(e)
//     });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
};

deleteTaskAndCount('6024d1aa9ecabb28007f233f').then((count) => {
    console.log(count);
}).catch((err) => {
    console.log(err);
});