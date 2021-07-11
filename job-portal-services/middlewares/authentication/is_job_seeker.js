const create_error = require("../../utils/create_error");
const JobSeekerRepository = require("../../repositories/job-seeker");
const isJobSeeker = async (request, response, next) => {
  const userId = request.id;

  if (!userId) {
    request.doLogout = true;
    next(create_error("No User Id found", 403));
  }
  const jobSeekerDetails = await JobSeekerRepository.findJobSeekerById(userId);
  if (jobSeekerDetails) {
    request.jobSeekerDetails = jobSeekerDetails;
    next();
  } else {
    request.doLogout = true;
    next(
      create_error("You are not a valid user to perform this operation", 404)
    );
  }
};

module.exports = isJobSeeker;
