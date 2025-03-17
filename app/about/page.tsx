"use client";

import styled from "styled-components";
import Image from "next/image";

import PageShell from "@/components/PageShell";

export default function About() {
  return (
    <PageShell>
      <AboutPageStyles>
        <h2>About Us</h2>
        <p>
          Zabel Monuments respectfully serves the Sheboygan, Manitowoc, and
          Green Bay areas and the surrounding communities of East Central
          Wisconsin with a selection of beautifully crafted memorials.
        </p>
        <p>
          We believe that a memorial tells a story that will continue long after
          we are gone, and families entrust us to create an appropriately
          designed memorial that commemorates their loved ones.
        </p>
        <div className="item">
          <h3>What is a memorialist?</h3>
          <p>
            A memorialist is both an artist and a craftsman, we create our own
            work and quality is our primary focus. We are one of three
            businesses in Wisconsin with a Certified Memorialist (CM) on staff.
          </p>
        </div>
        <div className="item certification">
          <div className="logo">
            <Image
              src="/images/aioca.png"
              alt="American Institute of Commemorative Art"
              width={121}
              height={121}
            />
          </div>
          <div className="text">
            <h3>American Institute of Commemorative Art</h3>
            <p>
              We are proud members of the American Institute of Commemorative
              Art (AICA). This is an Institute consisting of 55 of the top
              memorial designers in North America. Membership is by invitation
              only, and Eric (Zabel Monuments) is the only member in Wisconsin.
            </p>
            <a
              href="https://www.monuments-aica.com/"
              className="external-link-button"
            >
              Visit their website
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="item certification">
          <div className="logo">
            <Image
              src="/images/waomb.png"
              alt="Wisconsin Association of Monument Builders"
              width={121}
              height={121}
            />
          </div>
          <div className="text">
            <h3>Wisconsin Association of Monument Builders</h3>
            <p>
              We are well respected in the industry. We have had three
              generations serve as the President of the Wisconsin Association of
              Monument Builders.
            </p>
            <a href="http://wambonline.org/" className="external-link-button">
              Visit their website
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="item certification">
          <div className="logo">
            <Image
              src="/images/mb.png"
              alt="Monument Builders of North America"
              width={121}
              height={121}
            />
          </div>
          <div className="text">
            <h3>Monument Builders of North America</h3>
            <p>
              We are members and active participants of our national association
              - Monument Builders of North America.
            </p>
            <a
              href="https://monumentbuilders.org/"
              className="external-link-button"
            >
              Visit their website
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </AboutPageStyles>
    </PageShell>
  );
}

const AboutPageStyles = styled.div`
  h3 {
    margin: 0 0 1rem;
  }

  .item {
    padding: 2.25rem 0;
    border-top: 1px solid #d1d5db;

    p {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .certification {
    display: flex;
    gap: 2rem;
  }

  .logo {
    flex-shrink: 0;
    width: 3rem;

    img {
      width: 100%;
      height: auto;
    }
  }

  .external-link-button {
    margin: 1rem 0 0;
    padding: 0.75rem 1.25rem;
    display: inline-flex;
    align-items: flex-end;
    font-size: 0.8125rem;
    font-weight: 400;
    color: #1f2937;
    line-height: 1;
    background-color: transparent;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    svg {
      margin: 0 0 0 0.375rem;
      height: 0.75rem;
      width: 0.75rem;
      color: #9ca3af;
    }

    &:hover {
      border-color: #bbc1ca;
      color: #111827;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;
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
