const express = require('express');
const Category = require('../DB/Category');
const router = express.Router();
const mockedCategories = require('../Mocks/categories.json');

router.post('/', async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.json(category);
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

router.post('/many', async (req, res) => {
    try {
        await Category.insertMany(mockedCategories);
        res.json({ message: `Successfully feeded db with categories ${mockedCategories.length}` });
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json(categories);
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.json(category);
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

router.put('/:id', async (req, res) => {
    try {
        await Category.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: true });
        res.json({ message: `Successfully updated category with id ${req.params.id}` });
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id, { useFindAndModify: true });
        res.json({ message: `Successfully deleted category with id ${req.params.id}` });
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

module.exports = router;