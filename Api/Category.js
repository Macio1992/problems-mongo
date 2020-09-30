const express = require('express');
const Category = require('../DB/Category');
const CategoriesHelper = require('../Helpers/Categories');
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

router.post('/:categoriesAmount', async (req, res) => {
    try {
        await Category.insertMany(mockedCategories);
        const categories = await Category.find({});
        const categoriesHelper = new CategoriesHelper(categories, +req.params.categoriesAmount);
        const subcategories = categoriesHelper.getRandomSubCategories();
        await Category.insertMany(subcategories);
        res.json({ message: `Successfully feeded db with categories ${mockedCategories.length + subcategories.length}` });
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

router.get('/rootCategories', async (req, res) => {
    try {
        const rootCategories = await Category.find({ isRootCategory: true });
        res.json(rootCategories);
    } catch (err) {
        console.error(err);
        res.json({ error: JSON.stringify(err) });
    }
});

router.get('/subcategories/:rootCategoryId', async (req, res) => {
    try {
        const subcategories = await Category.find({ CategoryParentId: req.params.rootCategoryId });
        res.json({ subcategories });
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

router.delete('/all', async (req, res) => {
    try {
        await Category.deleteMany({});
        res.json({ message: 'Successfully removed all categories' });
    } catch (err) {
        console.error(err);
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
