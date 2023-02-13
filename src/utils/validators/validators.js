export const requiredField = (value) => {
  if (value) {
    return undefined;
  }
  return "Field is required";
};

export const minLengthCreator = (minLength) => (value) => {
  if (value && value.length < minLength) {
    return `Min length is ${minLength} symbols`;
  }
  return undefined;
};
