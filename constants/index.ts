import { Contact } from "../types";

export const storesMap: Record<Contact, Contact> = {
  greenbay: "greenbay",
  manitowoc: "manitowoc",
  sheboygan: "sheboygan",
  ["ask-our-cm"]: "ask-our-cm",
};

export const contactInfo = [
  {
    contact: storesMap.greenbay,
    name: "Green Bay Store",
    address: {
      street: "910 Lime Kiln Rd.",
      city: "Green Bay",
      state: "WI",
      zipcode: "54302",
    },
    phone: "9204327995",
    storeHours: "9:00am-4:30pm",
    image: "/images/greenbay.jpg",
    mapsUrl: "https://goo.gl/maps/x95eW7GdwsSVX2Jk7",
  },
  {
    contact: storesMap.manitowoc,
    name: "Manitowoc Store",
    address: {
      street: "1232 N 8th Street",
      city: "Manitowoc",
      state: "WI",
      zipcode: "54220",
    },
    phone: "9206843829",
    storeHours: "8:00am-4:30pm",
    image: "/images/manitowoc.jpg",
    mapsUrl: "https://goo.gl/maps/KN9Svpfyb18hJAbM7",
  },
  {
    contact: storesMap.sheboygan,
    name: "Sheboygan Store",
    address: {
      street: "1423 N 13th Street",
      city: "Sheboygan",
      state: "WI",
      zipcode: "53081",
    },
    phone: "9204522271",
    storeHours: "9:00am-4:30pm",
    image: "/images/sheboygan.jpg",
    mapsUrl: "https://goo.gl/maps/8tLHLG1Uuyem4gqGA",
  },
  {
    contact: storesMap["ask-our-cm"],
    name: "Certified memorialist",
    phone: "9206843829",
    image: "/images/certified.jpg",
    tag: "Did you know? There are only 109 Certified Memorialists in the United States, three here in Wisconsin and Zabel Monuments is proud to have one of them.",
  },
];
