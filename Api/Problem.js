const express = require('express');
const Problem = require('../DB/Problem');
const Category = require('../DB/Category');
const router = express.Router();
const ProblemsHelper = require('../Helpers/Problems');

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

router.post('/:problemsAmount', async (req, res) => {
    try {
        const categories = await Category.find({});
        const problemsHelper = new ProblemsHelper(categories, +req.params.problemsAmount);
        const problemsToInsert = problemsHelper.createRandomProblems();
        await Problem.insertMany(problemsToInsert);
        res.json({ message: `Successfully feeded db with problems ${problemsToInsert.length}` });
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

router.get('/subcategory/:id', async (req, res) => {
    try {
        const categoriesByCategory = await Problem.find({ ProblemSubCategory: req.params.id });
        res.json(categoriesByCategory);
    } catch (err) {
        res.json({ message: `Could't find any problems with id: ${req.params.id}` })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const problem = await Problem.findById({ _id: req.params.id });

        if (!problem) {
            res.json({ message: 'Requested problem could not be found in db' });
        }

        await Problem.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: true });
        res.json({ message: `Successfully updated problem with id ${req.params.id}` });
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

router.delete('/all', async (req, res) => {
    try {
        await Problem.remove({});
        res.json({ message: 'Successfully removed all problems' });
    } catch (err) {
        console.error(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const problem = await Problem.findById({ _id: req.params.id });

        if (!problem) {
            res.json({ message: 'Requested problem could not be found in db' });
        }

        await Problem.findByIdAndDelete(req.params.id, { useFindAndModify: true });
        res.json({ message: `Successfully deleted problem with id ${req.params.id}` });
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

module.exports = router;
