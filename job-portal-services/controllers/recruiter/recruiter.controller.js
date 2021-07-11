const RecruiterRepository = require("../../repositories/recruiter");
const { apiResponse } = require("../../utils/response_api");
const environment = require("../../env-vars");

const jwt = require("jsonwebtoken");
const create_error = require("../../utils/create_error");
exports.registerRecruiter = async (request, response, next) => {
  try {
    const {
      company_name,
      email,
      recuiter_name,
      password,
      
      
    } = request.body;
    const {recruiter} = await RecruiterRepository.createNewRecruiter({
      company_name,
      email,
      recuiter_name,
      password
    });
    const token = jwt.sign(
      { id: recruiter.id },
      environment.JSON_WEB_TOKEN_PASSWORD,
      { expiresIn: 864000 }
    );
    return response
      .status(201)
      .json(
        apiResponse(
          { recruiter, isRecruiter:true,accessToken: token },
          response.statusCode,
          "Company Profile created successfully"
        )
      );
  } catch (e) {
    next(e);
  }
};

exports.signInRecruiter = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const recruiter = await RecruiterRepository.findRecruiterByEmail(email);
    if (!recruiter) {
      next(create_error("You are not a registered recruiter", 404));
    }
    else{
        const isValidUser = await RecruiterRepository.isPasswordValid(recruiter,password);
        if(!isValidUser){
            throw new Error("Wrong Credentials")
        }
        const token = jwt.sign(
            { id: recruiter.id },
            environment.JSON_WEB_TOKEN_PASSWORD,
            { expiresIn: 864000 }
          );
        return response.status(200).json(apiResponse({recruiter,isRecruiter:true,accessToken:token},response.statusCode,"Welcome!!!"))
    }
  } catch (e) {
    next(create_error("Wrong Credentials", 403));
  }
};
