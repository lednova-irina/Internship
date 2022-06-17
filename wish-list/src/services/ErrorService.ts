const errors: Array<string> = [];

const ErrorService = {
  getErrors: () => {
    return errors;
  },
  addError: (message: string) => {
    errors.push(message);
  },
  deleteError: (message: string) => {
    const index = errors.findIndex((val: string) => val === message);
    if (index >= 0) {
      errors.splice(index, 1);
    }
  },
  count: () => errors.length,
};

export default ErrorService;
