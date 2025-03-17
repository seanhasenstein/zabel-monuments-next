"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { removeNonDigits } from "../utils";

// todo: replace with constants file
const stores = [
  {
    id: 1,
    name: "Sheboygan",
    contact: "sheboygan",
    image: "/images/sheboygan.jpg",
    address: {
      street: "1432 N 13th Street",
      city: "Sheboygan",
      state: "WI",
      zipcode: "53081",
    },
    addressUrl: "https://goo.gl/maps/BeAmegDE9v9FEk7A9",
    phone: "(920) 452-2271",
    hours: "Mon-Fri 9:00am-4:30pm",
  },
  {
    id: 2,
    name: "Manitowoc",
    contact: "manitowoc",
    image: "/images/manitowoc.jpg",
    address: {
      street: "1232 N 8th Street",
      city: "Manitowoc",
      state: "WI",
      zipcode: "54220",
    },
    addressUrl: "https://goo.gl/maps/anYiPUzFSf1rEFku5",
    phone: "(920) 684-3829",
    hours: "Mon-Fri 8:00am-4:30pm",
  },
  {
    id: 3,
    name: "Green Bay",
    contact: "greenbay",
    image: "/images/greenbay.jpg",
    address: {
      street: "910 Lime Kiln Road",
      city: "Green Bay",
      state: "WI",
      zipcode: "54302",
    },
    addressUrl: "https://goo.gl/maps/CSX8jPqZfH4CY2xU9",
    phone: "(920) 432-7995",
    hours: "Mon-Fri 9:00am-4:30pm",
  },
];

export default function StoreLocations() {
  return (
    <StoreLocationStyles>
      <div className="row">
        {stores.map((store) => (
          <div key={store.id} className="location">
            <div className="img">
              <Image
                src={store.image}
                alt={`${store.name} store building`}
                width={800}
                height={437}
              />
            </div>
            <div className="details">
              <div className="hours">
                <div className="title">{store.name} Store</div>
                <div className="data">Open {store.hours}</div>
              </div>
              <div className="address">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="data">
                  <a href={store.addressUrl}>
                    {store.address.street}
                    <br />
                    {store.address.city}, {store.address.state}{" "}
                    {store.address.zipcode}
                  </a>
                </div>
                <span className="left-border" />
              </div>
              <div className="phone">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="data">
                  <a href={`tel:+1${removeNonDigits(store.phone)}`}>
                    {store.phone}
                  </a>
                </div>
              </div>
              <div className="actions">
                <Link
                  href={`/contact?store=${store.contact}`}
                  className="contact-link"
                >
                  Contact {store.address.city} Store
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StoreLocationStyles>
  );
}

const StoreLocationStyles = styled.section`
  padding: 0 1.5rem;
  width: 100%;
  background-color: #f8fafc;

  .row {
    margin: 0 auto;
    display: flex;
    gap: 2rem;
    max-width: 1000px;
    width: 100%;
  }

  .location {
    margin: -5rem 0 0;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 0.125rem;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px,
      rgba(40, 65, 96, 0.05) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    .img {
      width: 100%;
      position: relative;
      display: flex;
      border-width: 5px 5px 0 5px;
      border-style: solid;
      background-color: #fff;
      border-color: #fff;
      border-radius: 0.125rem 0.125rem 0 0;

      img {
        width: 100%;
        height: auto;
        background-color: #fff;
        border-radius: 0.125rem 0.125rem 0 0;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0.125rem 0.125rem 0 0;
        box-shadow: inset 0 30px 40px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .details {
    margin: 0 auto;
    padding: 1.25rem 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .address,
  .phone {
    padding: 0.25rem 0 0.875rem;
    display: flex;
    gap: 1.125rem;

    .icon {
      height: 2rem;
      width: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px,
        rgba(17, 24, 39, 0.05) 0px 0px 0px 1px,
        rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      border-radius: 9999px;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: #64748b;
      }
    }

    .data {
      font-size: 0.875rem;
      color: #0f172a;

      a {
        color: #0f172a;

        &:hover {
          text-decoration: underline;
        }

        &:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
        }

        &:focus-visible {
          color: #1967d2;
          text-decoration: underline;
        }
      }
    }
  }

  .address {
    position: relative;

    .data {
      margin-top: 3px;
      line-height: 1.4;
    }

    .left-border {
      position: absolute;
      top: 2.5625rem;
      left: 0.9375rem;
      height: 1.125rem;
      width: 1px;
      background-color: #d1d5db;
    }
  }

  .phone {
    align-items: center;
  }

  .hours {
    margin: 0 0 0.75rem;
    padding: 0.125rem 0 1.125rem;
    text-align: center;
    border-bottom: 1px solid #e3eaf3;

    .title {
      margin: 0 0 0.25rem;
      font-size: 0.8125rem;
      font-weight: 600;
      color: #466ea5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .data {
      font-size: 0.875rem;
      color: #0f172a;
    }
  }

  .actions {
    margin: 0.25rem 0 0;
    display: flex;
  }

  .contact-link {
    padding: 0.5rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #1b2638;
    letter-spacing: -0.005em;
    background-color: #f5f7fa;
    border: 1px solid #dbe1ed;
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    transition: all 0.3s ease;

    &:hover {
      background-color: #e8ecf4;
      border-color: #cdd7e7;
      color: #0e141d;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      border: 1px solid #f1f5f9;
      box-shadow: #fff 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  @media (max-width: 991px) {
    .row {
      flex-direction: column;
      gap: 0;
    }

    .location {
      margin: 0 auto 3rem;
      max-width: 25rem;
      width: 100%;

      &:first-of-type {
        margin-top: -5rem;
      }
    }
  }
`;
