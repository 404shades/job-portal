const jwt = require("jsonwebtoken");
const create_error = require("../../utils/create_error");
const environment = require("../../env-vars")
const verifyToken = (request, response, next) => {
  try {
    const token = request.header("Authorization").replace("Bearer ", "");
    
    if (!token) {
      request.doLogout = true;
      next(create_error("Please Authenticate", 403));
    }
    const decoded = jwt.verify(token,environment.JSON_WEB_TOKEN_PASSWORD );
    request.id = decoded.id;
    next();
  } catch (e) {
    request.doLogout = true;
    next(create_error("You are not a valid user", 403));
  }
};

module.exports = verifyToken;
