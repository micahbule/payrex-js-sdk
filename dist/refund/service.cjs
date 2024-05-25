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

// src/refund/service.ts
var service_exports = {};
__export(service_exports, {
  default: () => RefundService
});
module.exports = __toCommonJS(service_exports);
var import_qs = __toESM(require("qs"), 1);

// src/refund/dto.ts
var RefundDto = class {
  constructor(apiResponse) {
    this.id = apiResponse.id;
    this.resource = apiResponse.resource;
    this.amount = apiResponse.amount;
    this.status = apiResponse.status;
    this.currency = apiResponse.currency;
    this.description = apiResponse.description;
    this.reason = apiResponse.reason;
    this.remarks = apiResponse.remarks;
    this.livemode = apiResponse.livemode;
    this.metadata = apiResponse.metadata;
    this.payment_id = apiResponse.payment_id;
    this.created_at = apiResponse.created_at;
    this.updated_at = apiResponse.updated_at;
  }
};

// src/refund/service.ts
var RefundService = class {
  constructor(client) {
    this.client = client;
    this.basePath = "/refunds";
  }
  create(params) {
    return __async(this, null, function* () {
      const response = yield this.client.send(
        "post",
        this.basePath,
        import_qs.default.stringify(params, { arrayFormat: "brackets" })
      );
      return new RefundDto(response.body);
    });
  }
};
