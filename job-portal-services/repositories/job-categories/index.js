const JobCategory = require("../../models").sequelize.models.JobCategory;
const JobCategoryRepository = {
    async addMultipleCategories(all_categories){
     return  await JobCategory.bulkCreate([...all_categories]);
    },
    async getAllAvailableCategories(){
        return await JobCategory.findAll();
    }
}


module.exports = JobCategoryRepository;