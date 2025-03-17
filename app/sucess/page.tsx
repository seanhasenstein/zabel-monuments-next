"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Success() {
  return (
    <SuccessMessageStyles>
      <div className="content">
        <h4>Message sent!</h4>
        <p>
          Thank you for contacting Zabel Monuments. We received your message and
          will be with you as soon as we can.
        </p>
        <div className="actions">
          <Link href="/contact" className="primary-button">
            Send another message
          </Link>
          <Link href="/" className="secondary-button">
            Back to home
          </Link>
        </div>
      </div>
      <div aria-hidden="true" className="background">
        <svg
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1463 360"
        >
          <path
            className="path1"
            fill="currentColor"
            d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
          ></path>
          <path
            className="path2"
            fill="currentColor"
            d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
          ></path>
        </svg>
      </div>
    </SuccessMessageStyles>
  );
}

const SuccessMessageStyles = styled.div`
  margin: 6rem auto 8rem;
  padding: 4rem 2rem;
  position: relative;
  max-width: 1000px;
  width: 100%;
  text-align: center;
  background-color: #fff;
  border-radius: 0.125rem;
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px,
    rgba(17, 24, 39, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  .content {
    position: relative;
    z-index: 200;
  }

  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;

    svg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .path1 {
        opacity: 0.04;
        color: #94a3b8;
      }

      .path2 {
        opacity: 0.04;
        color: #475569;
      }
    }
  }

  h4 {
    margin: 0 0 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: -0.025em;
  }

  p {
    margin: 0 auto 1.75rem;
    max-width: 36rem;
    width: 100%;
    font-size: 1.125rem;
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .primary-button,
  .secondary-button {
    padding: 0.6875rem 1.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.025rem;
    border-radius: 0.3125rem;

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: #fff 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  .primary-button {
    background-color: #6ea546;
    color: rgba(255, 255, 255, 1);
    border: 1px solid #569740;
    box-shadow: inset 0 1px 1px #89c475;
    transition: background-color 150ms ease-in-out;

    &:hover {
      background-color: #77b34c;
    }
  }

  .secondary-button {
    color: #1f2937;
    background-color: #f9fafb;
    border: 1px solid #d1d5db;
    box-shadow: inset 0 2px 2px #fff, 0 1px 3px 0 rgb(0 0 0 / 0.1),
      0 1px 2px -1px rgb(0 0 0 / 0.1);

    &:hover {
      background-color: #f3f4f6;
    }
  }

  @media (max-width: 1048px) {
    margin: 4rem 1.5rem;
    width: calc(100% - 3rem);
  }

  @media (max-width: 767px) {
    margin: 1.5rem;
  }

  @media (max-width: 600px) {
    .actions {
      flex-direction: column;
    }
  }

  @media (max-width: 350px) {
    padding: 2.5rem 1rem 3rem;
  }
`;
