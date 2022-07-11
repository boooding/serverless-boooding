const express = require('express');
const router = express.Router();

const cloudbase = require("@cloudbase/node-sdk");
const cloud_config = require('../cloud_config')
const cloudDb = cloudbase.init(cloud_config);
const db = cloudDb.database();

router.get('/', async (
    req,
    res) => {
    const todolist = await db.collection('todo').get();
    res.send(todolist)
})

// add todo
router.post('/', async (
    req,
    res) => {
    if (!req.body.title) {
        return;
    }
    const todoContent = {
        title: req.body.title,
        createTime: Date.now(),
        done:false
    }
    const back_data = await db.collection('todo').add(todoContent)
    res.send(back_data)
})

// edit todo
router.put('/', async (
    req,
    res) => {
    const todoContent = {
        title: req.query.title,
        done:req.query.done
    }
    const back_data = await db.collection('todo').doc(req.query.id).update(todoContent)
    res.send(back_data)
})

// delete todo
router.delete('/',  async (
    req,
    res) => {
    const back_data = await db.collection('todo').doc(req.query.id).remove()
    res.send(back_data)
})


module.exports = router;