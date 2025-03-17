"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Hero() {
  return (
    <HeroStyles>
      <div className="row">
        <div className="welcome-text">
          <h3>Welcome to Zabel Monuments</h3>
          <p>
            Bringing comfort and personalized memorials to generations of
            families in East Central Wisconsin since 1970. We&apos;re here to
            help tell a story that will reflect the spirit of your loved ones.
          </p>
          <div className="links">
            <Link href="/contact?store=greenbay" className="primary-link">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Schedule an appointment
            </Link>
            <Link href="/faq" className="secondary-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Frequently asked questions
            </Link>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

const HeroStyles = styled.section`
  padding: 0 1.5rem;
  background-color: #2a2721;
  background-image: url("/images/hero.jpg");
  background-size: cover;
  background-position: right;

  h3 {
    margin: 0 0 1.5rem;
    font-size: 1.625rem;
    color: #fff;
    letter-spacing: 0.025em;
  }

  p {
    color: rgba(255, 255, 255, 0.85);
  }

  .row {
    margin: 0 auto;
    padding: 4rem 0 12rem;
    max-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .welcome-text {
    margin: 0;
    max-width: 40rem;
    width: 100%;
  }

  .links {
    margin: 2rem 0 0;

    a:first-of-type {
      margin: 0 1.5rem 0 0;
    }
  }

  .primary-link,
  .secondary-link {
    padding: 0.6875rem 1.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    border-radius: 0.3125rem;

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: #2a2721 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }

    svg {
      margin: 0 0.5rem 0 0;
      height: 1rem;
      width: 1rem;
    }
  }

  .primary-link {
    background-color: #6ea546;
    border: 1px solid #569740;
    box-shadow: inset 0 1px 1px #89c475;
    transition: background-color 150ms ease-in-out;

    &:hover {
      background-color: #77b34c;
    }

    svg {
      color: #a1ca83;
    }
  }

  .secondary-link {
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    &:hover {
      color: rgba(255, 255, 255, 1);
      background-color: rgba(255, 255, 255, 0.025);
      border-color: rgba(255, 255, 255, 0.75);

      svg {
        color: rgba(255, 255, 255, 0.75);
      }
    }

    svg {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  @media (max-width: 991px) {
    .row {
      justify-content: center;
      text-align: center;
    }
  }

  @media (max-width: 650px) {
    background-size: cover;
    background-position: bottom center;

    .links {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      a:first-of-type {
        margin: 0;
      }
    }

    .primary-link,
    .secondary-link {
      padding: 0.6875rem 0rem;
    }
  }
`;
