const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/tasks', auth,  async (req, res) => {
    const task = new Task({
        ...req.body,
        createdBy: req.user._id
    });
    try {
        await task.save();
        res.status(201).send(task);
    } catch(e) {
        res.status(400).send(e);
    }
});

// GET /tasks?completed=true&limit=10&offset=0&sortBy=createdAt_asc
router.get('/tasks', auth, async (req, res) => {
    const match = {};
    const sort = {};
    if(req.query.completed) {
        match.completed = req.query.completed.toLowerCase() === 'true';
    }

    if(req.query.sortBy) {
        const parts = req.query.sortBy.split('_');
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
    }

    try {
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.offset),
                sort
            }
        }).execPopulate();
        res.send(req.user.tasks);
    } catch(e) {
        console.log(e);
        res.status(500).send();
    }
});

router.get('/tasks/:id', auth, async (req, res) => {
    const id = req.params.id;
    try {
        const task = await Task.findOne({ _id: id, createdBy: req.user._id });
        if(!task) {
            return res.status(404).send();
        } else {
            return res.send(task);
        }
    } catch(e) {
        res.status(500).send();
    }
});

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const alloweUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((update) => alloweUpdates.includes(update));
    
    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates!' })
    }

    try {
        const task = await Task.findOne({ _id: req.params.id, createdBy: req.user._id });
        updates.forEach((update) => {
            task[update] = req.body[update];
        });
        await task.save();
        res.send(task);
    } catch(e) {
        res.status(400).send(e);
    }
});

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, createdBy: req.user._id });
        if(!task) {
            return res.status(400).send();
        }
        res.send(task);
    } catch(e) {
        res.status(500).send();
    }
});

module.exports = router;