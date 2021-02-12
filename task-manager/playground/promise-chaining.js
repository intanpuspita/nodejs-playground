require('../src/db/mongoose');
const User = require('../src/models/user');

// 6024abac47b1f41beaea8479

// User.findByIdAndUpdate('6024abac47b1f41beaea8479', { age: 18 })
//     .then((user) => {
//         console.log(user);
//         return User.countDocuments({ age: 18 })
//     }).then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(e)
//     });

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}

updateAgeAndCount('6024abac47b1f41beaea8479', 17).then((count) => {
    console.log(count);
}).catch((err) => {
    console.log(err);
});