"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
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

// src/webhooks/service.ts
var service_exports = {};
__export(service_exports, {
  default: () => WebhookService
});
module.exports = __toCommonJS(service_exports);
var import_qs = __toESM(require("qs"), 1);

// src/webhooks/dto.ts
var WebhookDto = class {
  constructor(apiResponse) {
    this.id = apiResponse.id;
    this.resource = apiResponse.resource;
    this.secret_key = apiResponse.secret_key;
    this.status = apiResponse.status;
    this.description = apiResponse.description;
    this.livemode = apiResponse.livemode;
    this.url = apiResponse.url;
    this.events = apiResponse.events;
    this.created_at = apiResponse.created_at;
    this.updated_at = apiResponse.updated_at;
  }
};

// src/webhooks/service.ts
var WebhookService = class {
  constructor(client) {
    this.client = client;
    this.basePath = "/webhooks";
    this.disable = this.toggle("disable");
    this.enable = this.toggle("enable");
  }
  create(params) {
    return __async(this, null, function* () {
      const response = yield this.client.send(
        "post",
        this.basePath,
        import_qs.default.stringify(params, { arrayFormat: "brackets" })
      );
      return new WebhookDto(response.body);
    });
  }
  get(id) {
    return __async(this, null, function* () {
      let finalUrl = this.basePath;
      if (id) {
        finalUrl = `${this.basePath}/${id}`;
      }
      const response = yield this.client.send("get", finalUrl);
      if (id) {
        return new WebhookDto(response.body);
      } else {
        return response.body.data.map((webhook) => new WebhookDto(webhook));
      }
    });
  }
  update(params) {
    return __async(this, null, function* () {
      const _a = params, { id } = _a, payload = __objRest(_a, ["id"]);
      const response = yield this.client.send(
        "put",
        `${this.basePath}/${id}`,
        payload
      );
      return new WebhookDto(response.body);
    });
  }
  delete(id) {
    return __async(this, null, function* () {
      const response = yield this.client.send("delete", `${this.basePath}/${id}`);
      return new WebhookDto(response.body);
    });
  }
  toggle(type) {
    return (id) => __async(this, null, function* () {
      const response = yield this.client.send(
        "post",
        `${this.basePath}/${id}/${type}`
      );
      return new WebhookDto(response.body);
    });
  }
};
