import { randomUUID } from 'crypto';
import path from 'path';
import capitalizePtBr from 'capitalize-pt-br';

// ************************************************************************** //
// ROOTH_PATH
// constant with the NodeJS project root path (ex: /Users/biruel/Dropbox/dev/jarvisly-v2/code-backend)
// ************************************************************************** //
const mainFile = (require.main && path.dirname(require.main.filename)) || '.'; // get the main file (ex: app.js) path
export const ROOT_PATH: string = path.join(mainFile, '..'); // Root Path to the main file

// ************************************************************************** //
// clone()
// clone object broken all deep references
// ************************************************************************** //
export const clone = (obj: Object): Object => {
  return JSON.parse(JSON.stringify(obj));
};

// ************************************************************************** //
// isObject()
// check if the obj is really a valid javascript object (POJO)
// ************************************************************************** //
export const isObject = (obj: any): boolean => {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
};

// ************************************************************************** //
// returnOnlyNumbers()
// return only numbers from a string
// ************************************************************************** //
export const returnOnlyNumbers = (str: string): string => str.replace(/\D/g, '');

// ************************************************************************** //
// returnOnlyNumbers()
// return string with words capitalize ignoreing the prepositions
// ************************************************************************** //
export const capitalize = (str: string): string => capitalizePtBr(str);

// ************************************************************************** //
// generaToken()
// generate a randon token using the node crypto core package
// ************************************************************************** //
export const generaToken = () => randomUUID();

// ========================================================================== //
// api methods export
// ========================================================================== //
const index = {
  ROOT_PATH: ROOT_PATH,
  clone: clone,
  isObject: isObject,
  returnOnlyNumbers: returnOnlyNumbers,
  capitalize: capitalize,
  generaToken: generaToken,
};

export default index;
