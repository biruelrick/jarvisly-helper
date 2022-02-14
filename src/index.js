// clone object broken all deep references
export const clone = obj => {
  return JSON.parse(JSON.stringify(obj));
};

// return only numbers from a string
export const returnOnlyNumbers = str => str.replace(/\D/g, '');

// api methods
const index = {
  clone: clone,
  returnOnlyNumbers: returnOnlyNumbers,
};

export default index;
