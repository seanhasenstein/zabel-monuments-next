"use client";

import styled from "styled-components";

import PageShell from "@/components/PageShell";

import { GraniteColorImageMetadata } from "@/types";

type Props = {
  images: GraniteColorImageMetadata[];
};

export default function GraniteColorsContent({ images }: Props) {
  return (
    <PageShell>
      <GraniteColorsStyles>
        <h2>Granite Colors</h2>
        <p>
          The following are the granite colors that we typically have to offer.
        </p>
        <div className="grid">
          {images.map((image) => (
            <div key={image.key} className="grid-item">
              <img src={image.url} alt={image.caption} title={image.url} />
              <div className="caption">{image.caption}</div>
            </div>
          ))}
        </div>
      </GraniteColorsStyles>
    </PageShell>
  );
}

const GraniteColorsStyles = styled.div`
  .grid {
    margin: 2.5rem 0 0;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .grid-item {
    margin: 0 0 1rem;
    width: calc(16.6666666667% - 0.8333333333rem);
  }

  .grid-item,
  .grid-item img {
    border-radius: 0.125rem;
  }

  .caption {
    font-size: 0.75rem;
    font-weight: 500;
    color: #111827;
    line-height: 1.25;
    text-align: center;
  }

  @media (max-width: 900px) {
    .grid-item {
      width: calc(25% - 0.75rem);
    }
  }

  @media (max-width: 415px) {
    .grid-item {
      width: calc(33.3333% - 0.6666666667rem);
    }
  }
`;
