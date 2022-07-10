const express = require('express');
const router = express.Router();

router.get('/', (
    req,
    res) => {
    res.send('todo router')
})

// add todo
router.post('/', (
    req,
    res) => {
    res.send('todo post')
})

// edit todo
router.put('/', (
    req,
    res) => {
    res.send('todo put')
})

// delete todo
router.delete('/', (
    req,
    res) => {
    res.send('todo delete')
})


module.exports = router;