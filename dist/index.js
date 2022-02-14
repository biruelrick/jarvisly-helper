"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROOT_PATH = exports.clone = exports.returnOnlyNumbers = exports.capitalize = exports.isObject = exports.generaToken = void 0;
const crypto_1 = require("crypto");
const path_1 = __importDefault(require("path"));
const capitalize_pt_br_1 = __importDefault(require("capitalize-pt-br"));
// ************************************************************************** //
// generaToken()
// generate a randon token using the crypto package
// ************************************************************************** //
const generaToken = () => (0, crypto_1.randomUUID)();
exports.generaToken = generaToken;
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
// words capitalize
// ************************************************************************** //
const capitalize = (str) => (0, capitalize_pt_br_1.default)(str);
exports.capitalize = capitalize;
// ************************************************************************** //
// returnOnlyNumbers()
// return only numbers from a string
// ************************************************************************** //
const returnOnlyNumbers = (str) => str.replace(/\D/g, '');
exports.returnOnlyNumbers = returnOnlyNumbers;
// ************************************************************************** //
// clone()
// clone object broken all deep references
// ************************************************************************** //
const clone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};
exports.clone = clone;
// ************************************************************************** //
// ROOTH_PATH
// return the main path project (ex: /src)
// ************************************************************************** //
// get the main file (ex: app.js) path
const mainFile = (require.main && path_1.default.dirname(require.main.filename)) || '.';
// Root Path to the main file
exports.ROOT_PATH = path_1.default.join(mainFile, '..');
// ========================================================================== //
// api methods export
// ========================================================================== //
const index = {
    ROOT_PATH: exports.ROOT_PATH,
    clone: exports.clone,
    returnOnlyNumbers: exports.returnOnlyNumbers,
    capitalize: exports.capitalize,
    isObject: exports.isObject,
    generaToken: exports.generaToken,
};
exports.default = index;
