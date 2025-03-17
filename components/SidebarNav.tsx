"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const links = [
  {
    id: 1,
    text: "About Us",
    to: "/about",
  },
  {
    id: 2,
    text: "FAQ",
    to: "/faq",
  },
  {
    id: 3,
    text: "Granite Colors",
    to: "/granite-colors",
  },
  {
    id: 4,
    text: "Meet Our Staff",
    to: "/staff",
  },
  {
    id: 5,
    text: "Our History",
    to: "/history",
  },
  {
    id: 6,
    text: "Our Services",
    to: "/services",
  },
  {
    id: 7,
    text: "Why Choose Us?",
    to: "/why-choose-us",
  },
  {
    id: 8,
    text: "100% Guarantee",
    to: "/guarantee",
  },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarNavStyles>
      <div className="container">
        {links.map((l) => (
          <Link
            key={l.id}
            href={l.to}
            className={pathname === l.to ? "current" : ""}
          >
            {l.text}
          </Link>
        ))}
      </div>
    </SidebarNavStyles>
  );
}

const SidebarNavStyles = styled.div`
  padding: 0 5rem 0 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-width: 21rem;
  width: 100%;

  .container {
    padding: 0.5rem 0.375rem 0.5rem 0.5rem;
    background-color: #fff;
    border-radius: 0.25rem;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px,
      rgba(17, 24, 39, 0.05) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  a {
    padding: 0 0.875rem;
    height: 2.5rem;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1;
    color: #334155;
    letter-spacing: 0.0125em;
    border-bottom: 1px solid #e5e7eb;
    user-select: none;

    &:first-of-type {
      border-top: 1px solid #e5e7eb;
    }

    &:after {
      content: "";
      position: absolute;
      right: -1.125rem;
      top: 0;
      border-top: 1.25rem solid transparent;
      border-left: 1.25rem solid transparent;
      border-bottom: 1.25rem solid transparent;
    }

    &:hover {
      background-color: #fdfdfd;
      color: #000;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      outline-color: #1967d2;
    }

    &.current,
    &.current:hover {
      margin-top: -1px;
      background-color: #6ea546;
      text-shadow: 0 1px 1px #527c34;
      font-weight: 500;
      color: #fff;
      border-top: none;
      border-bottom: 1px solid #527c34;
      border-radius: 0.125rem 0 0 0.125rem;

      &:after {
        border-left: 1.125rem solid #6ea546;
      }
    }
  }

  @media (max-width: 991px) {
    display: none;
  }

  @media print {
    display: none;
  }
`;
