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
        const randomIndex = this.getRandomDigit(0, categoriesIds.length);
        const randomCategoryID = categoriesIds[randomIndex];
        const isRootCategory = false;
        const CategoryParentId = randomCategoryID;
        const CategoryName = this.generateRandomString(20);

        return {
            CategoryName,
            isRootCategory,
            CategoryParentId,
        }
    }

    getRandomDigit(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    generateRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
}

module.exports = Categories;
