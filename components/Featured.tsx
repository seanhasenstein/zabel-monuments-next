"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Featured() {
  return (
    <FeaturedStyles>
      <div className="container">
        <div className="img">
          <img
            src="/images/featured.jpg"
            alt="A monument with pink flowers displayed on top."
            width={1000}
            height={1050}
          />
        </div>
        <div className="content">
          <h3>
            <span>Why Choose Us?</span>
          </h3>
          <Link href="/services" className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="main-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h4>Our services</h4>
              <p>
                We provide the best quality and workmanship for each and every
                one of our customers.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-right"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
          <Link href="history" className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="main-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h4>Our history</h4>
              <p>
                We&apos;ve been bringing comfort and personalized memorials to
                generations of families in East Central Wisconsin since 1970
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-right"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
          <Link href="/staff" className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="main-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <div>
              <h4>Our caring staff</h4>
              <p>
                We are here to help you through this process and create a
                lasting tribute to your loved one.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-right"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </FeaturedStyles>
  );
}

const FeaturedStyles = styled.section`
  margin: 7rem 1.5rem 4rem;

  .container {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .img,
  .content {
    max-width: 500px;
    width: 100%;
  }

  .img {
    flex-shrink: 0;

    img {
      width: 100%;
      height: auto;
    }

    img {
      border: 8px solid #fff;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
  }

  .content {
    margin: 0 0 0 4rem;
    padding: 0 0 1.5rem;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #cbd5e1;
  }

  .item {
    position: relative;
    padding: 1.5rem 0;
    display: flex;
    gap: 1.25rem;

    &:hover {
      .icon-right {
        opacity: 1;
      }
    }

    .main-icon {
      flex-shrink: 0;
      height: 1.5rem;
      width: 1.75rem;
      color: #466ea5;
    }
  }

  h3 {
    position: relative;
    margin: 0 0 1.5rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    text-align: center;

    span {
      padding: 0 1.5rem;
      position: relative;
      background-color: #f8fafc;
      z-index: 200;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0.875rem;
      width: 100%;
      height: 1px;
      background-color: #cbd5e1;
      z-index: 10;
    }
  }

  h4 {
    margin: 0 0 0.75rem;
    font-size: 1.125rem;
  }

  p {
    margin: 0;
    color: #4b5563;
  }

  .icon-right {
    position: absolute;
    top: calc(50% - 0.625rem);
    right: -2.5rem;
    height: 1.25rem;
    width: 1.25rem;
    color: #466ea5;
    opacity: 0;
    transition: all 200ms ease-in-out;
  }

  @media (max-width: 991px) {
    .container {
      margin: 0 auto;
      max-width: 1000px;
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .img {
      display: none;
    }

    .content {
      margin: 0;
    }

    .item {
      pointer-events: none;
    }

    .icon-right {
      display: none;
    }
  }
`;
