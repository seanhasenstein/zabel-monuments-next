"use client";

import styled from "styled-components";

import { Contact } from "@/types";

type Props = {
  activeContact: Contact;
  setActiveContact: React.Dispatch<React.SetStateAction<Contact>>;
};

export default function SelectContact({
  activeContact,
  setActiveContact,
}: Props) {
  const handleButtonClick = (contact: Contact) => {
    setActiveContact(contact);
  };

  return (
    <SelectContactStyles>
      <h4>Who would you like to contact?</h4>
      <div className="grid">
        <button
          type="button"
          onClick={() => handleButtonClick("greenbay")}
          className={activeContact === "greenbay" ? "active" : ""}
        >
          <span className="dot">
            <span className="inner-dot" />
          </span>
          Green Bay store
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick("manitowoc")}
          className={activeContact === "manitowoc" ? "active" : ""}
        >
          <span className="dot">
            <span className="inner-dot" />
          </span>
          Manitowoc store
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick("sheboygan")}
          className={activeContact === "sheboygan" ? "active" : ""}
        >
          <span className="dot">
            <span className="inner-dot" />
          </span>
          Sheboygan store
        </button>
        <button
          type="button"
          onClick={() => handleButtonClick("ask-our-cm")}
          className={activeContact === "ask-our-cm" ? "active" : ""}
        >
          <span className="dot">
            <span className="inner-dot" />
          </span>
          Ask our certified memorialist
        </button>
      </div>
    </SelectContactStyles>
  );
}

const SelectContactStyles = styled.div`
  margin: 4rem 0;

  .grid {
    display: flex;
    flex-direction: column;
  }

  button {
    margin: -1px 0 0;
    padding: 0.875rem 1.25rem;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: #1f2937;
    border: 1px solid #d1d5db;

    &:first-of-type {
      border-radius: 0.5rem 0.5rem 0 0;
    }

    &:last-of-type {
      border-radius: 0 0 0.5rem 0.5rem;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }

    &:focus {
      z-index: 200;
    }

    &.active {
      color: #1b1947;
      background-color: #eef2ff;
      border-color: #c7d2fe;
      z-index: 100;

      .dot {
        background-color: #4f46e5;
        border-color: #4f46e5;
      }
    }

    .dot {
      margin: 0 0.875rem 0 0;
      height: 1rem;
      width: 1rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #d1d5db;
      border-radius: 9999px;
    }

    .inner-dot {
      height: 0.375rem;
      width: 0.375rem;
      display: block;
      background-color: #fff;
      border-radius: 9999px;
    }
  }
`;
