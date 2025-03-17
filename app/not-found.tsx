"use client";

import Link from "next/link";
import styled from "styled-components";

export default function NotFound() {
  return (
    <NotFoundPageStyles>
      <main>
        <h1>404 - Page not found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="link-button">
          Back to the homepage
        </Link>
      </main>
    </NotFoundPageStyles>
  );
}

const NotFoundPageStyles = styled.div`
  margin: 0 auto;
  padding: 10rem 1.5rem 12rem;
  max-width: 62.5rem;
  width: 100%;
  text-align: center;

  h1 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #111827;
  }

  p {
    margin: 1.5rem 0;
    font-size: 1rem;
    font-weight: 500;
    color: #6b7280;
  }

  .link-button {
    margin: 0.5rem 0 0;
    padding: 0.6875rem 1.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #6ea546;
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.025rem;
    color: rgba(255, 255, 255, 1);
    border: 1px solid #569740;
    border-radius: 0.3125rem;
    box-shadow: inset 0 1px 1px #89c475;
    transition: background-color 150ms ease-in-out;

    &:hover {
      background-color: #77b34c;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: #f8fafc 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }
`;
