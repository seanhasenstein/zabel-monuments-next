"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const primaryNavItems = [
  { id: 1, slug: "/", text: "Home" },
  { id: 2, slug: "/services", text: "Services" },
  { id: 3, slug: "/gallery/individual-monuments", text: "Gallery" },
  { id: 4, slug: "/staff", text: "Staff" },
  { id: 5, slug: "/about", text: "About" },
  {
    id: 6,
    slug: "/contact?store=greenbay",
    store: "greenbay",
    text: "Contact Us",
  },
];

const secondaryNavItems = [
  {
    id: 1,
    slug: "/contact?store=ask-our-cm",
    store: "ask-our-cm",
    text: "Ask Our Certified Memorialist",
  },
  { id: 2, slug: "/faq", text: "FAQ's" },
  { id: 3, slug: "/granite-colors", text: "Granite Colors" },
  { id: 4, slug: "/guarantee", text: "100% Guarantee" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);

  const getPrimaryNavClass = (slug: string, pathname: string) => {
    if (slug === "/" && pathname === "/") {
      return "active";
    }
    if (slug !== "/" && pathname.includes(slug)) {
      return "active";
    }
    if (slug === "/contact?store=greenbay" && pathname.includes("/contact")) {
      return "active";
    }
    if (
      slug === "/gallery/individual-monuments" &&
      pathname.includes("/gallery")
    ) {
      return "active";
    }
    return "";
  };

  const getSecondaryNavClass = (slug: string, pathname: string) => {
    console.log(pathname);
    if (
      slug === "/contact?store=ask-our-cm" &&
      pathname.includes("/contact") &&
      searchParams.get("store") === "ask-our-cm"
    ) {
      return "active";
    }
    if (pathname.includes(slug)) {
      return "active";
    }
    return "";
  };

  useEffect(() => {
    // Only run when pathname changes, not on initial render
    if (prevPathRef.current !== pathname) {
      // Close menu after navigation is complete
      setOpen(false);

      // Smooth scroll to top of page
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Update the previous pathname reference
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  return (
    <HeaderStyles>
      <div className="secondary-nav">
        {secondaryNavItems.map((i) => (
          <Link
            key={i.id}
            href={i.slug}
            className={getSecondaryNavClass(i.slug, pathname)}
          >
            {i.text}
          </Link>
        ))}
      </div>
      <div className={`primary-nav ${open ? "open" : ""}`}>
        <div className="inner">
          <div className="mobile-header-container">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Zabel Monuments"
                  width={760}
                  height={176}
                />
              </Link>
            </div>
            <button
              type="button"
              className="mobile-button"
              onClick={() => setOpen(!open)}
              aria-expanded={open ? "true" : "false"}
              aria-controls="nav-menu"
            >
              {open ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
              <span className="sr-only">Navigation menu</span>
            </button>
          </div>
          <div className={`mobile-nav-container ${open ? "open" : ""}`}>
            <nav id="nav-menu">
              <ul>
                {primaryNavItems.map((i) => (
                  <li key={i.id}>
                    <Link
                      href={`${i.slug}`}
                      onClick={() => {
                        if (i.slug.includes(pathname)) {
                          setOpen(false);
                        }
                      }}
                      className={getPrimaryNavClass(i.slug, pathname)}
                    >
                      {i.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className="mobile-secondary-nav">
              {secondaryNavItems.map((i) => (
                <li key={i.id}>
                  <Link
                    href={i.slug}
                    onClick={() => {
                      if (i.slug.includes(pathname)) {
                        setOpen(false);
                      }
                    }}
                    className={getSecondaryNavClass(i.slug, pathname)}
                  >
                    {i.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  .secondary-nav {
    padding: 0.5rem 1rem;
    width: 100%;
    background-color: #1a1915;
    display: flex;
    justify-content: flex-end;

    a {
      margin: 0 0 0 2.25rem;
      font-family: "Poppins", sans-serif;
      font-size: 0.75rem;
      letter-spacing: 0.025em;
      color: rgba(255, 255, 255, 0.9);

      &:hover,
      &.active {
        text-decoration: underline;
      }

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      &:focus-visible {
        text-decoration: underline;
        color: #1967d2;
      }
    }
  }

  .mobile-secondary-nav,
  .mobile-button {
    display: none;
  }

  .primary-nav {
    padding: 0.875rem 1.5rem;
    width: 100%;
    background-color: #2a2721;

    .inner {
      margin: 0 auto;
      max-width: 1000px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .logo {
    padding-bottom: 0.375rem;
    width: 12.5rem;

    a {
      border-radius: 0.125rem;

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      &:focus-visible {
        outline: 2px solid #1967d2;
      }

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  nav {
    ul {
      margin: 0;
      display: flex;
    }

    li {
      margin: 0 1.5rem;

      &:first-of-type {
        margin-left: 0;

        a {
          padding-left: 0;
        }
      }

      &:last-of-type {
        margin-right: 0;

        a {
          padding-right: 0;
        }
      }
    }

    a {
      padding: 0 0.25rem;
      display: block;
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      letter-spacing: 0.025em;
      color: rgba(255, 255, 255, 0.7);
      transition: color 200ms ease-in-out;

      &:hover,
      &.active {
        color: #fff;
      }

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      &:focus-visible {
        text-decoration: underline;
        color: #1967d2;
      }
    }
  }

  @media (max-width: 991px) {
    .secondary-nav {
      justify-content: center;
    }

    .primary-nav {
      .inner {
        flex-direction: column;
      }
    }

    .logo {
      padding-bottom: 0.875rem;
    }
  }

  @media (max-width: 767px) {
    .secondary-nav {
      display: none;
    }

    .primary-nav {
      padding-bottom: 0;
    }

    .primary-nav .open {
      height: calc(100vh);
    }

    .mobile-header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .mobile-button {
      padding: 0.5rem;
      display: block;
      background-color: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.8);
      cursor: pointer;

      &:hover {
        color: rgba(255, 255, 255, 1);
      }

      svg {
        height: 1.5rem;
        width: 1.5rem;
      }
    }

    .mobile-header-container,
    .mobile-nav-container,
    .inner {
      width: 100%;
    }

    .mobile-nav-container {
      display: none;

      &.open {
        padding-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    nav {
      padding: 0 0 0.75rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      border-top: 1px solid rgba(255, 255, 255, 0.05);

      ul {
        display: block;
      }

      li {
        margin: 0;
      }

      a,
      a:first-of-type {
        margin: 0;
        padding: 0.75rem 0;
        display: block;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      }
    }

    .mobile-secondary-nav {
      margin: 3rem 0 0;
      padding: 0.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      background-color: #1a1915;

      a {
        padding: 0.625rem 0;
        display: block;
        font-family: "Poppins", sans-serif;
        font-size: 0.875rem;
        letter-spacing: 0.05em;
        color: rgba(255, 255, 255, 0.5);

        &:last-of-type {
          border-bottom: none;
        }

        &.active,
        &.active:hover {
          color: #fff;
          text-decoration: underline;
        }

        &:hover {
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }

  @media (max-width: 350px) {
    .mobile-nav-container a {
      padding: 0.5rem 0.25rem;
    }
    .mobile-secondary-nav {
      padding: 0.375rem 1.25rem;

      a {
        padding: 0.5rem 0;
      }
    }
  }

  @media print {
    display: none;
  }
`;
