"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/payment-intent/service.ts
var service_exports = {};
__export(service_exports, {
  default: () => PaymentIntentService
});
module.exports = __toCommonJS(service_exports);
var import_qs = __toESM(require("qs"), 1);

// src/payment-intent/dto.ts
var PaymentIntentDto = class {
  constructor(apiResponse) {
    this.id = apiResponse.id;
    this.resource = apiResponse.resource;
    this.amount = apiResponse.amount;
    this.capture_type = apiResponse.capture_type;
    this.client_secret = apiResponse.client_secret;
    this.currency = apiResponse.currency;
    this.description = apiResponse.description;
    this.livemode = apiResponse.livemode;
    this.metadata = apiResponse.metadata;
    this.next_action = apiResponse.next_action;
    this.payment_methods = apiResponse.payment_methods;
    this.status = apiResponse.status;
    this.created_at = apiResponse.created_at;
    this.updated_at = apiResponse.updated_at;
  }
};

// src/payment-intent/service.ts
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
      return new PaymentIntentDto(response.body);
    });
  }
  get(id) {
    return __async(this, null, function* () {
      const response = yield this.client.send("get", `${this.basePath}/${id}`);
      return new PaymentIntentDto(response.body);
    });
  }
  capture(id, amount) {
    return __async(this, null, function* () {
      const response = yield this.client.send(
        "post",
        `${this.basePath}/${id}/capture`,
        { amount }
      );
      return new PaymentIntentDto(response.body);
    });
  }
};
