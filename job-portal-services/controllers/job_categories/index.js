const JobCategoryRepository = require("../../repositories/job-categories");
const fakeCategories = require("../../seeders/sample_categories.json");
const { apiResponse } = require("../../utils/response_api");
exports.addFakeJobcategories = async (request,response,next)=>{
    try{
        await JobCategoryRepository.addMultipleCategories(fakeCategories);
        return response.status(201).json(apiResponse({message:"Successfully created fake categories"},response.status,"Added Successfully"))
    }catch(e){
        next(e)
    }
}

exports.getAllAvailableCategories = async (request,response,next)=>{
    try{
        const allCategories=  await JobCategoryRepository.getAllAvailableCategories();
        return response.json(apiResponse(allCategories,response.statusCode,))
    }catch(e){
        next(e)
    }
}

