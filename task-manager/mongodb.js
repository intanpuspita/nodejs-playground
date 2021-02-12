const mongodb = require('mongodb');
const { MongoClient, ObjectID } = require('mongodb');

const connURL = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager-app';

// const id = new ObjectID();
// console.log(id.getTimestamp());

MongoClient.connect(connURL, { useNewUrlParser: true }, (error, client) => {
    if(error) 
        return console.log('Unable to connect to database');
    
    const db = client.db(dbName);

    // // delete
    // db.collection('user').deleteMany({
    //     name: 'Intan'
    // }).then((result) => {
    //     console.log(result.deletedCount);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // // update
    // db.collection('user').updateOne({
    //     _id: new ObjectID("602293028df84735947685ba")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // // read documents (single)
    // db.collection('user').findOne({
    //     _id: new ObjectID("60229417fd8ba3360f9db061")
    // }, (error, user) => {
    //     if(error)
    //         return console.log('Unable to fetch user');

    //     console.log(user);
    // })

    // // read documents (many)
    // db.collection('user').find({
    //     age: 27
    // }).toArray((error, users) => {
    //     if(error)
    //         return console.log('Unable to fetch user');

    //     console.log(users);
    // });

    // // insert one documents (row) to collection (table)
    // db.collection('user').insertOne({
    //     _id: id,
    //     name: 'Nana',
    //     age: 27
    // }, (error, result) => {
    //     if(error)
    //         return console.log('Unable to insert user');

    //     console.log(result.ops);
    // });

    // // insert many documents to collection (table)
    // db.collection('user').insertMany([{
    //     name: 'Jane',
    //     age: 30
    // }, {
    //     name: 'Joe',
    //     age: 25
    // }], (error, result) => {
    //     if(error)
    //         return console.log('Unable to insert documents');

    //     console.log(result.ops);
    // });

    // insert task
    // db.collection('task').insertMany([{
    //     description: 'Read a book',
    //     completed: false
    // }, {
    //     description: 'Send important documents',
    //     completed: true
    // }], (error, result) => {
    //     if(error)
    //         return console.log('Unable to insert documents');
        
    //     console.log(result.ops);
    // });

    // read task
    // db.collection('task').findOne({
    //     _id: new ObjectID("6022951839d6fa36873960b0")
    // }, (error, task) => {
    //     if(error)
    //         return console.log('Unable to fetch task');

    //     console.log(task);
    // });

    // db.collection('task').find({
    //     completed: false
    // }).toArray((error, tasks) => {
    //     if(error)
    //         return console.log('Unable to fetch task');

    //     console.log(tasks);
    // });

    // db.collection('task').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });

    db.collection('task').deleteOne({
        _id: new ObjectID('6022951839d6fa36873960b0')
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

});