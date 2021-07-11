exports.apiResponse = (
  responseData,
  statusCode,
  successMessage = "",
  errorMessage = "",
  doLogout = false
) => {
  return {
    doLogout,
    response: responseData,
    statusCode,
    messages: {
      successMessage,
      errorMessage,
    },
  };
};
