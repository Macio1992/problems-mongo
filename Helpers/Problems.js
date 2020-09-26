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
        return {
            ProblemContent: generateRandomString(getRandomDigit(MIN_LENGTH, MAX_LENGTH)),
            ProblemSolution: generateRandomString(getRandomDigit(MIN_LENGTH, MAX_LENGTH)),
            ProblemType: 'SINGLE',
            ProblemCategory: this.getRandomCategoryId(categories)
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
}

module.exports = Problems;