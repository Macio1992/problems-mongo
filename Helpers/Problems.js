const MIN_LENGTH = 5;
const MAX_LENGTH = 50;

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
            ProblemContent: this.generateRandomString(this.getRandomDigit(MIN_LENGTH, MAX_LENGTH)),
            ProblemSolution: this.generateRandomString(this.getRandomDigit(MIN_LENGTH, MAX_LENGTH)),
            ProblemType: "SINGLE",
            ProblemCategory: this.getRandomCategoryId(categories)
        }
    }

    getRandomCategoryId(categories) {
        const categoriesIds = this.getCategoriesIds(categories);
        const randomIndex = this.getRandomDigit(0, categories.length);
        return categoriesIds[randomIndex];
    }

    getRandomDigit(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    generateRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    getCategoriesIds() {
        return this.categories.map(category => category._id);
    }
}

module.exports = Problems;