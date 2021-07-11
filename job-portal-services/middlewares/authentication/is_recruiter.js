const create_error = require("../../utils/create_error")
const RecruiterRepository = require("../../repositories/recruiter")
const isRecruiter = async (request, response, next) => {

  const userId = request.id;
  console.log(userId)

  if (!userId) {
    request.doLogout = true;
    next(create_error("No User Id found",403));
  }
  const recruiterFound = await RecruiterRepository.findRecruiterById(userId);
  if (recruiterFound) {
    request.recruiterDetails = recruiterFound;
    next();
  } else {
    request.doLogout = true;
    next(create_error("You are not a valid user to perform this operation",404));
  }
};

module.exports = isRecruiter
