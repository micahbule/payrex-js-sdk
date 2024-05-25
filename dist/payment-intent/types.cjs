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

// src/payment-intent/types.ts
var types_exports = {};
__export(types_exports, {
  PI_CaptureType: () => PI_CaptureType,
  PI_PaymentMethods: () => PI_PaymentMethods
});
module.exports = __toCommonJS(types_exports);
var PI_PaymentMethods = /* @__PURE__ */ ((PI_PaymentMethods2) => {
  PI_PaymentMethods2["CARD"] = "card";
  PI_PaymentMethods2["GCASH"] = "gcash";
  return PI_PaymentMethods2;
})(PI_PaymentMethods || {});
var PI_CaptureType = /* @__PURE__ */ ((PI_CaptureType2) => {
  PI_CaptureType2["AUTOMATIC"] = "automatic";
  PI_CaptureType2["CAPTURE"] = "capture";
  return PI_CaptureType2;
})(PI_CaptureType || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PI_CaptureType,
  PI_PaymentMethods
});
