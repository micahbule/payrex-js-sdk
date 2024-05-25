"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/refund/dto.ts
var dto_exports = {};
__export(dto_exports, {
  default: () => RefundDto
});
module.exports = __toCommonJS(dto_exports);
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
