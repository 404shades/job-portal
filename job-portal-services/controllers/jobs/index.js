const { apiResponse } = require("../../utils/response_api");
const JobRepository = require("../../repositories/jobs");
const JobApplicationsRepository = require("../../repositories/job-applications")
exports.createJob = async (request, response, next) => {
  try {
    const { job_description, job_title, last_date_to_apply, JobCategoryId } =
      request.body;
    const { recruiterDetails } = request;
    const RecruiterId = recruiterDetails.id;
    const job = await JobRepository.createNewJob({
      job_description,
      job_title,
      last_date_to_apply,
      JobCategoryId,
      RecruiterId,
    });

    return response
      .status(201)
      .json(
        apiResponse(job, response.statusCode, "job Published Successfully")
      );
  } catch (err) {
    next(err);
  }
};

exports.getAllJobs = async (request, response, next) => {
  try {
    let allJobs;
    const { searchTerm } = request.query;
    if (searchTerm) {
      allJobs = await JobRepository.searchJobsByNameDescription(searchTerm)
    } else {
      allJobs = await JobRepository.getAllJobs();
    }
    return response.json(apiResponse(allJobs, response.statusCode));
  } catch (err) {
    next(err);
  }

  
};

exports.getJobApplicantsByJobId = async (request,response,next)=>{
  try{
    const { id } = request;
    const allApplicants = await JobApplicationsRepository.getJobApplicantsByRecruiterId(id)
    return response.json(apiResponse(allApplicants,response.statusCode))
  }catch(e){
    next(e)
  }
}