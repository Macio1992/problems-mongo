const CategoriesHelper = require('./Categories');

const categories = [
    {
        _id: "id1",
        "CategoryName": "AWS"
    },
    {
        _id: "id2",
        "CategoryName": "GIT"
    },
    {
        _id: "id3",
        "CategoryName": "SCRUM"
    },
    {
        _id: "id4",
        "CategoryName": "JAVASCRIPT"
    },
    {
        _id: "id5",
        "CategoryName": "NODEJS"
    },
    {
        _id: "id6",
        "CategoryName": "AZURE"
    }
]
const categoriesHelper = new CategoriesHelper(categories, 20);
const subcategories = categoriesHelper.getRandomSubCategories();
console.log('subc ', subcategories);

// console.log('subs ', subcategories.length);