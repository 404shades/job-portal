const fs = require('fs');
const {apiResponse} = require('../../utils/response_api')
let errorLogger = function (err, req, res, next) {
    if (err) {
        fs.appendFile('ErrorLogger.txt',new Date() +" : "+ err.stack + "\n" , (error) => {
            if (error) {
                console.log("logging error failed");
            }
        });
        if(err.status) {
          res.status(err.status);
        }
        else {
          res.status(500);
        }
        res.json(apiResponse({message:err.message},res.statusCode,'',err.message,req.doLogout))
    }
    next();
}
module.exports = errorLogger;