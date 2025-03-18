"use client";

import styled from "styled-components";

const servicesArray = [
  {
    id: 1,
    service: "Designing and installing of custom cemetery memorials",
  },
  {
    id: 2,
    service: "Engraving of the final date of death on-site on existing stones",
  },
  {
    id: 3,
    service: "Leveling of existing memorials",
  },
  {
    id: 4,
    service: "Cleaning of older monuments",
  },
  {
    id: 5,
    service: "House address stone engravements (wholesale and retail accounts)",
  },
  {
    id: 6,
    service: "Garden Art and Engraved Rocks",
  },
  {
    id: 7,
    service: "Rusted metal sandblasting",
  },
  {
    id: 8,
    service:
      "Selling, installing, and servicing of flagpoles (both residential and commercial)",
  },
];

export default function ServicesContent() {
  return (
    <>
      <h2>Our Services</h2>
      <p>
        In addition to designing and installing custom cemetery memorials we
        also provide various other services that are listed below. We take pride
        in providing the highest quality and workmanship to every single one of
        our customers.
      </p>
      <ServicesStyles>
        <ul className="services">
          {servicesArray.map((s) => (
            <li key={s.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {s.service}
            </li>
          ))}
        </ul>
      </ServicesStyles>
    </>
  );
}

const ServicesStyles = styled.div`
  ul {
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0.75rem 0;
    display: flex;
    list-style-type: none;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.35;
    color: #111827;
  }

  svg {
    margin: 0.125rem 1rem 0 0;
    flex-shrink: 0;
    height: 1.25rem;
    width: 1.25rem;
    color: #466ea5;
  }
`;
