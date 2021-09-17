// A custom error class to inherit from the Error class.
// The custom error class will add a relevant error number apart from message.

class CustomError extends Error {
    constructor(message, errorNumber) {
      super(message);
      this.errorNumber = errorNumber
    }
}


module.exports = CustomError;