const { getRandomDigit, generateRandomString } = require('./Utils');

class Categories {
    constructor(categories, subcategoriesAmount = 20) {
        this.categories = categories;
        this.subcategoriesAmount = subcategoriesAmount;
    }

    getRandomSubCategories() {
        const subcategories = [];
        for (let i = 0; i < this.subcategoriesAmount; i++) {
            const subcategory = this.getRandomSubCategory();
            subcategories.push(subcategory);
        }

        return subcategories;
    }

    getRandomSubCategory() {
        const categoriesIds = this.categories.map(category => category._id);
        const randomIndex = getRandomDigit(0, categoriesIds.length);
        const randomCategoryID = categoriesIds[randomIndex];
        const isRootCategory = false;
        const CategoryParentId = randomCategoryID;
        const CategoryName = generateRandomString(20);

        return {
            CategoryName,
            isRootCategory,
            CategoryParentId,
        }
    }
}

module.exports = Categories;
