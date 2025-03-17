"use client";

import styled from "styled-components";

import SidebarNav from "./SidebarNav";

type Props = {
  children: React.ReactNode;
};

export default function PageShell({ children }: Props) {
  return (
    <PageShellStyles>
      <div className="page-container">
        <SidebarNav />
        <main>{children}</main>
      </div>
    </PageShellStyles>
  );
}

const PageShellStyles = styled.div`
  padding: 5rem 1.5rem;

  .page-container {
    margin: 0 auto;
    max-width: 65rem;
    display: flex;
  }

  main {
    width: 100%;
  }

  h2 {
    margin: 0 0 1.5rem;
    padding: 0 0 0.875rem;
    font-size: 1.5rem;
    letter-spacing: 0.0125em;
    border-bottom: 1px solid #d1d5db;
  }

  p {
    margin: 0 0 2rem;
  }

  ul {
    padding: 0 0 0 1.25rem;
  }

  li {
    list-style-type: disc;
    padding: 0.75rem 0;
    font-size: 0.9375rem;
    color: #475569;
  }

  .external-link {
    color: #111827;
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    padding: 3.5rem 1.5rem;

    h2 {
      margin: 0 0 2.5rem;
      padding: 0;
      border: none;
    }
  }
`;
