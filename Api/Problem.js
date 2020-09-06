const express = require('express');
const Problem = require('../DB/Problem');
const router = express.Router();
const mockedProblems = require('../Mocks/problems.json');

router.post('/', async (req, res) => {
    try {
        const problem = new Problem(req.body);
        await problem.save();
        res.json(problem);
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

router.post('/many', async (req, res) => {
    try {
        await Problem.insertMany(mockedProblems);
        res.json({ message: `Successfully feeded db with problems ${mockedProblems.length}` });
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

router.get('/', async (req, res) => {
    try {
        const problems = await Problem.find({});
        res.json(problems);
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const problem = await Problem.findById(req.params.id);
        res.json(problem);
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

router.put('/:id', async (req, res) => {
    try {
        await Problem.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: true });
        res.json({ message: `Successfully updated problem with id ${req.params.id}` });
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Problem.findByIdAndDelete(req.params.id, { useFindAndModify: true });
        res.json({ message: `Successfully deleted problem with id ${req.params.id}` });
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

module.exports = router;