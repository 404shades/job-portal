const {sequelize} = require("../models")
const {JobCategories} = sequelize.models.JobCategory;
const jobcategories = require('./sample_categories.json')

sequelize.sync({force:true}).then(async function(){
    await Promise.all(
        jobcategories.map(categories=>{
            JobCategories.create(categories)
        })
    )
})