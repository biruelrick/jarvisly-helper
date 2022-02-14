import { randomUUID } from 'crypto';
import path from 'path';
import capitalizePtBr from 'capitalize-pt-br';

// ************************************************************************** //
// generaToken()
// generate a randon token using the crypto package
// ************************************************************************** //
export const generaToken = () => randomUUID();

// ************************************************************************** //
// isObject()
// check if the obj is really a valid javascript object (POJO)
// ************************************************************************** //
export const isObject = (obj: any): boolean => {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
};

// ************************************************************************** //
// returnOnlyNumbers()
// words capitalize
// ************************************************************************** //
export const capitalize = (str: string): string => capitalizePtBr(str);

// ************************************************************************** //
// returnOnlyNumbers()
// return only numbers from a string
// ************************************************************************** //
export const returnOnlyNumbers = (str: string): string => str.replace(/\D/g, '');

// ************************************************************************** //
// clone()
// clone object broken all deep references
// ************************************************************************** //
export const clone = (obj: Object): Object => {
  return JSON.parse(JSON.stringify(obj));
};

// ************************************************************************** //
// ROOTH_PATH
// return the main path project (ex: /src)
// ************************************************************************** //
// get the main file (ex: app.js) path
const mainFile = (require.main && path.dirname(require.main.filename)) || '.';
// Root Path to the main file
export const ROOT_PATH = path.join(mainFile, '..');

// ========================================================================== //
// api methods export
// ========================================================================== //
const index = {
  ROOT_PATH: ROOT_PATH,
  clone: clone,
  returnOnlyNumbers: returnOnlyNumbers,
  capitalize: capitalize,
  isObject: isObject,
  generaToken: generaToken,
};

export default index;
