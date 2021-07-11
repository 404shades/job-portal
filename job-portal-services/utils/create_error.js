module.exports = (errorMessage,statusCode)=>{
    const error =  Error(errorMessage);
    error.status = statusCode;
    return error;
}