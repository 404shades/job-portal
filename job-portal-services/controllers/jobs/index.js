const { apiResponse } = require("../../utils/response_api");
const JobRepository = require("../../repositories/jobs");
exports.createJob = async (request, response, next) => {
  try {
    const { job_description, job_title } = request.body;
    const { recruiterDetails } = request;
    const job = await JobRepository.createNewJob({
      job_description,
      job_title,
      created_by: recruiterDetails.id,
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
