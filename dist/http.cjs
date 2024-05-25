"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/http.ts
var http_exports = {};
__export(http_exports, {
  default: () => HttpClient
});
module.exports = __toCommonJS(http_exports);
var import_needle = __toESM(require("needle"), 1);

// src/constants.ts
var BASE_API_URL = "https://api.payrexhq.com";

// src/errors/resource-not-found.ts
var ResourceNotFoundError = class _ResourceNotFoundError extends Error {
  constructor() {
    super();
    this.name = _ResourceNotFoundError.name;
  }
};

// src/errors/invalid-auth.ts
var InvalidAuthError = class _InvalidAuthError extends Error {
  constructor() {
    super();
    this.name = _InvalidAuthError.name;
  }
};

// src/errors/invalid-request.ts
var InvalidRequestError = class _InvalidRequestError extends Error {
  constructor() {
    super();
    this.name = _InvalidRequestError.name;
  }
};

// src/http.ts
var HttpClient = class {
  constructor(apiKey) {
    this.encodedApiKey = Buffer.from(`${apiKey}:`).toString("base64");
  }
  processError({ statusCode }) {
    if (statusCode === 400) {
      throw new InvalidRequestError();
    }
    if (statusCode === 401) {
      throw new InvalidAuthError();
    }
    if (statusCode === 404) {
      throw new ResourceNotFoundError();
    }
    throw new Error(`The server responded with a ${statusCode} status code`);
  }
  send(method, url, data, opts) {
    return __async(this, null, function* () {
      const needleArgs = [
        method,
        `${BASE_API_URL}${url}`,
        ""
      ];
      const defaultNeedleOpts = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${this.encodedApiKey}`
        }
      };
      if (data) {
        needleArgs.splice(2, 1);
        needleArgs.push(data);
      }
      if (!opts) {
        needleArgs.push(defaultNeedleOpts);
      } else {
        needleArgs.push(__spreadValues(__spreadValues({}, defaultNeedleOpts), opts));
      }
      const response = yield (0, import_needle.default)(...needleArgs);
      const { statusCode } = response;
      if (statusCode && statusCode >= 400) {
        this.processError(response);
      }
      return response;
    });
  }
};
