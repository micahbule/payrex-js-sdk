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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => PayRexClient
});
module.exports = __toCommonJS(src_exports);

// src/http.ts
var import_needle = __toESM(require("needle"));
var HttpClient = class {
  constructor(apiKey) {
    this.baseApiUrl = "https://api.payrexhq.com";
    this.encodedApiKey = Buffer.from(`${apiKey}:`).toString("base64");
  }
  send(method, url, data, opts) {
    const needleArgs = [method, `${this.baseApiUrl}${url}`];
    const needleOpts = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${this.encodedApiKey}`
      }
    };
    if (data) {
      needleArgs.push(data);
    }
    if (!opts) {
      needleArgs.push(needleOpts);
    } else {
      needleArgs.push(__spreadValues(__spreadValues({}, needleOpts), opts));
    }
    return (0, import_needle.default)(...needleArgs);
  }
};

// src/services/payment-intent.ts
var import_qs = __toESM(require("qs"));
var PaymentIntentService = class {
  constructor(client) {
    this.client = client;
    this.basePath = "/payment_intents";
  }
  create(params) {
    return __async(this, null, function* () {
      const response = yield this.client.send(
        "post",
        this.basePath,
        import_qs.default.stringify(params, { arrayFormat: "brackets" })
      );
      return response.body;
    });
  }
};

// src/index.ts
var PayRexClient = class {
  constructor(secretApiKey) {
    const httpClient = new HttpClient(secretApiKey);
    this.paymentIntent = new PaymentIntentService(httpClient);
  }
};
