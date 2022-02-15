"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnPhoneMask = exports.generaToken = exports.capitalize = exports.returnOnlyNumbers = exports.isObject = exports.clone = exports.ROOT_PATH = void 0;
const crypto_1 = require("crypto");
const path_1 = __importDefault(require("path"));
const capitalize_pt_br_1 = __importDefault(require("capitalize-pt-br"));
// ************************************************************************** //
// ROOTH_PATH
// constant with the NodeJS project root path (ex: /Users/biruel/Dropbox/dev/jarvisly-v2/code-backend)
// ************************************************************************** //
const mainFile = (require.main && path_1.default.dirname(require.main.filename)) || '.'; // get the main file (ex: app.js) path
exports.ROOT_PATH = path_1.default.join(mainFile, '..'); // Root Path to the main file
// ************************************************************************** //
// clone()
// clone object broken all deep references
// ************************************************************************** //
const clone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};
exports.clone = clone;
// ************************************************************************** //
// isObject()
// check if the obj is really a valid javascript object (POJO)
// ************************************************************************** //
const isObject = (obj) => {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
};
exports.isObject = isObject;
// ************************************************************************** //
// returnOnlyNumbers()
// return only numbers from a string
// ************************************************************************** //
const returnOnlyNumbers = (str) => str.replace(/\D/g, '');
exports.returnOnlyNumbers = returnOnlyNumbers;
// ************************************************************************** //
// returnOnlyNumbers()
// return string with words capitalize ignoreing the prepositions
// ************************************************************************** //
const capitalize = (str) => (0, capitalize_pt_br_1.default)(str);
exports.capitalize = capitalize;
// ************************************************************************** //
// generateToken()
// generate a random token using the node crypto core package
// ************************************************************************** //
const generaToken = () => (0, crypto_1.randomUUID)();
exports.generaToken = generaToken;
// ************************************************************************** //
// returnPhoneMask()
// Return the phone number mask according the contry and type of phone (defined by number length)
// ************************************************************************** //
const returnPhoneMask = (str, countryCode = 'br') => {
    if (!str)
        return;
    if (countryCode === 'br') {
        if (str.length === 11) {
            if (str.substring(0, 1) === '0') { // 0800-PJMONEY
                return '#### ## ####';
            }
            else {
                return '(##) #.####-####';
            }
        }
        else if (str.length === 10) {
            return '(##) ####-####';
        }
        else {
            return str;
        }
    }
    else {
        return str;
    }
};
exports.returnPhoneMask = returnPhoneMask;
// ========================================================================== //
// api methods export
// ========================================================================== //
const index = {
    ROOT_PATH: exports.ROOT_PATH,
    clone: exports.clone,
    isObject: exports.isObject,
    returnOnlyNumbers: exports.returnOnlyNumbers,
    capitalize: exports.capitalize,
    generaToken: exports.generaToken,
    returnPhoneMask: exports.returnPhoneMask
};
exports.default = index;
