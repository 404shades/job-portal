const JobSeekerRepository = require("../../repositories/job-seeker");
const JobApplicationRepository = require("../../repositories/job-applications");
const jwt = require("jsonwebtoken");
const environment = require("../../env-vars");
const { apiResponse } = require("../../utils/response_api");
const create_error = require("../../utils/create_error");

exports.registerJobSeeker = async (request, response, next) => {
  try {
    const { email, password, full_name } = request.body;
    const { jobSeeker } = await JobSeekerRepository.registerJobSeeker({
      email,
      password,
      full_name,
    });
    const token = jwt.sign(
      { id: jobSeeker.id },
      environment.JSON_WEB_TOKEN_PASSWORD,
      { expiresIn: 864000 }
    );
    return response
      .status(201)
      .json(
        apiResponse(
          { jobSeeker,isRecruiter:false, accessToken: token },
          "User Registered Successfully"
        )
      );
  } catch (e) {
    next(e);
  }
};

exports.signInJobSeeker = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const jobSeeker = await JobSeekerRepository.findJobSeekerByEmail(email);
    if (!jobSeeker) {
      next(create_error("You are not registered"));
    } else {
      const isValidUser = await JobSeekerRepository.isPasswordvalid(
        jobSeeker,
        password
      );
      if (!isValidUser) {
        throw new Error("Wrong Credentials");
      }
      const token = jwt.sign(
        { id: jobSeeker.id },
        environment.JSON_WEB_TOKEN_PASSWORD,
        { expiresIn: 864000 }
      );
      return response
        .status(200)
        .json(
          apiResponse(
            { jobSeeker,isRecruiter:false, accessToken: token },
            response.statusCode,
            "Welcome!!!"
          )
        );
    }
  } catch (e) {
    next(create_error("Wrong Credentials", 403));
  }

  
};


exports.applyJob = async (request, response, next) => {
    try {
      const JobSeekerId = request.id;
      const { JobId } = request.body;

      const jobApplication =
        await JobApplicationRepository.createNewJobApplication({
          JobSeekerId,
          JobId,
        });
      return response
        .status(201)
        .json(
          apiResponse(
            jobApplication,
            response.statusCode,
            "Successfully Applied to this Job"
          )
        );
    } catch (e) {
      next(e);
    }
  };