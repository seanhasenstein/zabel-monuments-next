import * as crypto from "crypto";

import { storesMap } from "../constants";
import { Contact } from "../types";

// ****************************************************

const NUM = "0123456789";

function createMessageId() {
  const rnd = crypto.randomBytes(11);
  const value = new Array(11);
  const charsLength = NUM.length;

  for (let i = 0; i < value.length; i++) {
    if (i === 5) {
      value[5] = "-";
    } else {
      value[i] = NUM[rnd[i] % charsLength];
    }
  }

  return value.join("");
}

// ****************************************************

function formatContactTerm(contact: Contact) {
  if (contact === "ask-our-cm") return "certified memorialist";
  if (contact === "greenbay") return "Green Bay store";
  if (contact === "manitowoc") return "Manitowoc store";
  if (contact === "sheboygan") return "Sheboygan store";
}

// ****************************************************

function formatPhoneNumber(input: string) {
  const digits = removeNonDigits(input);
  const digitsArray = digits.split("");
  return digitsArray
    .map((v, i) => {
      if (i === 0) return `(${v}`;
      if (i === 2) return `${v}) `;
      if (i === 5) return `${v}-`;
      return v;
    })
    .join("");
}

// ****************************************************

function removeNonDigits(input: string) {
  return input.replace(/\D/g, "");
}

// ****************************************************

function slugify(input: string) {
  const result = input.toLowerCase().split(" ");
  return result.join("-");
}

// ****************************************************

function storeIsContact(store: string): store is Contact {
  return Object.values(storesMap).some((s) => s === store);
}

// ****************************************************

export {
  createMessageId,
  formatContactTerm,
  formatPhoneNumber,
  removeNonDigits,
  slugify,
  storeIsContact,
};
