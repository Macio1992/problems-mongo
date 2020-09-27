const MIN_LENGTH = 5;
const MAX_LENGTH = 50;

const { getRandomDigit, generateRandomString } = require('./Utils');

class Problems {
    constructor(categories, problemsAmount) {
        this.categories = categories;
        this.problemsAmount = problemsAmount;
    }

    createRandomProblems() {
        const problems = [];
        for (let i = 0; i < this.problemsAmount; i++) {
            const newProblem = this.generateProblem(this.categories);
            problems.push(newProblem);
        }

        return problems;
    }

    generateProblem(categories) {
        const ProblemContent = generateRandomString(getRandomDigit(MIN_LENGTH, MAX_LENGTH));
        const ProblemSolution = generateRandomString(getRandomDigit(MIN_LENGTH, MAX_LENGTH));
        const ProblemCategory = this.getRandomCategoryId(categories);
        const ProblemSubCategory = this.getRandomSubcategoryId(ProblemCategory);
        const ProblemType = 'SINGLE';

        return {
            ProblemContent,
            ProblemSolution,
            ProblemType,
            ProblemCategory,
            ProblemSubCategory,
        }
    }

    getRandomCategoryId(categories) {
        const categoriesIds = this.getCategoriesIds(categories);
        const randomIndex = getRandomDigit(0, categories.length);

        return categoriesIds[randomIndex];
    }

    getCategoriesIds() {
        return this.categories.map(category => category._id);
    }

    getCategorySubcategoriesIds(categoryId) {
        const subcategoriesIds = this.categories
            .filter(category => category._id === categoryId && category.isRootCategory)
            .map(category => category._id);

        return subcategoriesIds;
    }

    getRandomSubcategoryId(categoryId) {
        const subcategoriesIds = this.getCategorySubcategoriesIds(categoryId);
        const randomIndex = getRandomDigit(0, subcategoriesIds.length);

        return subcategoriesIds[randomIndex] || '5f6f3f6ae6c51744442023ad';
    }
}

module.exports = Problems;
