"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";

import SelectContact from "@/components/SelectContact";
import ContactForm from "@/components/ContactForm";

import { contactInfo } from "@/constants";
import { formatPhoneNumber } from "@/utils";

import { Contact as ContactType } from "@/types";

export default function Contact() {
  const searchParams = useSearchParams();
  const location = searchParams.get("store") as ContactType | null;

  const [activeContact, setActiveContact] = useState<ContactType>(() => {
    return location || "greenbay";
  });
  const [contactDetails, setContactDetails] = useState(contactInfo[0]);

  useEffect(() => {
    const updatedDetails = contactInfo.find((c) => c.contact === activeContact);
    if (updatedDetails) {
      setContactDetails(updatedDetails);
    }
  }, [activeContact]);

  return (
    <ContactStyles>
      <div className="container">
        <div className="section-1">
          <h2>Contact us</h2>
          <p>
            Please let us know if you have any questions or if you would like to
            schedule an appointment.
          </p>
          <SelectContact
            activeContact={activeContact}
            setActiveContact={setActiveContact}
          />
        </div>
        <div className="section-2">
          <ContactForm activeContact={activeContact} />
        </div>
        <div className="section-3">
          <div className="store-details">
            {contactDetails.image && (
              <div className="store-img">
                <Image
                  src={contactDetails.image}
                  alt={`${contactDetails.name} front`}
                  width={800}
                  height={437}
                />
              </div>
            )}
            <div className="store-contact-info">
              <div>
                <h3>{contactDetails.name}</h3>
                {contactDetails.tag && <p>{contactDetails.tag}</p>}
                {contactDetails.address && (
                  <p>
                    {contactDetails.address.street}
                    <br />
                    {contactDetails.address.city},{" "}
                    {contactDetails.address.state}{" "}
                    {contactDetails.address.zipcode}
                  </p>
                )}
                {contactDetails.phone && (
                  <p>
                    Phone:{" "}
                    <a
                      href={`tel:+1${contactDetails.phone}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {formatPhoneNumber(contactDetails.phone)}
                    </a>
                  </p>
                )}
                {contactDetails.mapsUrl && (
                  <p>
                    <a
                      href={contactDetails.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="directions"
                    >
                      Directions
                    </a>
                  </p>
                )}
              </div>
            </div>
            {contactDetails.storeHours && (
              <div className="store-hours">
                <h3>Store Hours</h3>
                <ul>
                  <li>
                    <span>Monday</span>
                    {contactDetails.storeHours}
                  </li>
                  <li>
                    <span>Tuesday</span>
                    {contactDetails.storeHours}
                  </li>
                  <li>
                    <span>Wednesday</span>
                    {contactDetails.storeHours}
                  </li>
                  <li>
                    <span>Thursday</span>
                    {contactDetails.storeHours}
                  </li>
                  <li>
                    <span>Friday</span>
                    {contactDetails.storeHours}
                  </li>
                  <li>
                    <span>Saturday</span>
                    Closed
                  </li>
                  <li>
                    <span>Sunday</span>
                    Closed
                  </li>
                  <li className="italic">
                    *After hours appointments available
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </ContactStyles>
  );
}

const ContactStyles = styled.div`
  padding: 5rem 1.5rem;

  h4 {
    margin: 0 0 1rem;
    font-family: "Poppins", sans-serif;
    font-size: 0.9375rem;
    font-weight: 500;
    color: #111827;
  }

  .container {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    display: grid;
    grid-template-areas:
      "section-1 section-3"
      "section-2 section-3";
    gap: 0 10rem;
  }

  .section-1,
  .section-2 {
    max-width: 32rem;
    width: 100%;
  }

  .section-1 {
    grid-area: section-1;
  }

  .section-2 {
    grid-area: section-2;
  }

  .section-3 {
    grid-area: section-3;
  }

  .store-details {
    h3 {
      margin: 0 0 0.875rem;
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.025em;
    }
  }

  .store-img,
  .store-contact-info {
    max-width: 18rem;
  }

  .store-img {
    margin: 2rem 0 2.5rem;
    display: flex;
    width: 100%;
    border: 6px solid #fff;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);

    img {
      width: 100%;
      height: auto;
    }
  }

  .store-contact-info {
    margin: 0 0 2.5rem;

    li {
      margin: 0 0 1rem;
    }

    p {
      margin: 0;
      font-size: 0.9375rem;
      color: #1f2937;

      a {
        color: #1f2937;

        &:hover {
          text-decoration: underline;
        }

        &.directions {
          color: #4338ca;
          text-decoration: underline;
        }
      }
    }
  }

  .store-hours {
    ul {
      margin: 0;
      padding: 0;
    }

    li {
      margin: 0 0 0.375rem;
      font-size: 0.9375rem;
      font-weight: 400;
      color: #1f2937;

      span {
        display: inline-block;
        width: 8rem;
      }

      &.italic {
        margin-top: 1.25rem;
        font-size: 0.8125rem;
        font-weight: 500;
        font-style: italic;
        color: #6b7280;
      }
    }
  }

  @media (max-width: 992px) {
    .container {
      gap: 5rem;
    }
  }

  @media (max-width: 767px) {
    padding-top: 2rem;

    .container {
      grid-template-areas: "section-1" "section-3" "section-2";
      gap: 0;
    }

    .section-1,
    .section-2 {
      max-width: unset;
    }

    .store-details {
      margin: 0 0 4rem;
    }

    .store-img {
      margin: 0 0 2.5rem;
    }
  }
`;
