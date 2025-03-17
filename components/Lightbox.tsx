"use client";

import styled from "styled-components";

import { ImageMetadata } from "../types";

type Props = {
  images: ImageMetadata[];
  showLightbox: boolean;
  setShowLightbox: React.Dispatch<React.SetStateAction<boolean>>;
  selectedImg: number;
  setSelectedImg: React.Dispatch<React.SetStateAction<number>>;
  prevButton: React.MutableRefObject<HTMLButtonElement | null>;
  nextButton: React.MutableRefObject<HTMLButtonElement | null>;
  closeButton: React.MutableRefObject<HTMLButtonElement | null>;
  imgRef: React.MutableRefObject<HTMLImageElement | null>;
  galleryName: string;
};

export default function Lightbox({
  images,
  showLightbox,
  setShowLightbox,
  selectedImg,
  setSelectedImg,
  prevButton,
  nextButton,
  closeButton,
  imgRef,
  galleryName,
}: Props) {
  if (!images || images.length === 0) return null;

  return (
    <LightboxStyles
      role="dialog"
      id="lightbox"
      aria-labelledby="lightbox"
      aria-modal="true"
      className={showLightbox ? "active" : ""}
    >
      <div className="container">
        <img
          ref={imgRef}
          src={images[selectedImg].url}
          alt={`${galleryName} photo ${selectedImg + 1} of ${images.length}`}
        />
        <button
          onClick={() => setShowLightbox(false)}
          className="close-button"
          ref={closeButton}
          aria-label="Close Lightbox"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="actions-container">
          <div className="actions">
            <button
              onClick={() => setSelectedImg((prevIndex) => prevIndex - 1)}
              className="previous-button"
              ref={prevButton}
              area-label="Previous Image"
              disabled={selectedImg === 0}
            >
              <span className="sr-only">Previous Image</span>
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
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </button>
            <button
              onClick={() => setSelectedImg((prevIndex) => prevIndex + 1)}
              className="next-button"
              ref={nextButton}
              aria-label="Next Image"
              disabled={selectedImg === images.length - 1}
            >
              <span className="sr-only">Next Image</span>
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <p className="count">
        {selectedImg + 1} / {images.length}
      </p>
    </LightboxStyles>
  );
}

const LightboxStyles = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 9999;
  background-color: rgba(15, 15, 15, 0.98);

  &.active {
    display: flex;
  }

  .container {
    margin: 0 auto;
    max-width: 40rem;
    width: 65%;
    height: 75%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    user-select: none;
  }

  .close-button {
    padding: 1.75rem 1.75rem 2.5rem 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.85);
    border-radius: 0.125rem;
    border: none;
    cursor: pointer;

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }

    &:hover {
      color: rgba(255, 255, 255, 1);
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      outline-color: #1967d2;
    }
  }

  .previous-button,
  .next-button {
    padding-top: 16rem;
    padding-bottom: 16rem;
    position: absolute;
    top: calc(50% - 16rem);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.85);
    border-radius: 0.125rem;
    border: none;
    cursor: pointer;

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }

    &:hover {
      color: rgba(255, 255, 255, 1);
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      outline-color: #1967d2;
    }

    &:disabled {
      color: rgba(255, 255, 255, 0.25);
      cursor: default;
    }
  }

  .previous-button {
    padding-left: 2rem;
    padding-right: calc(50% - 5rem);
    left: 0;
  }

  .next-button {
    padding-right: 2rem;
    padding-left: calc(50% - 5rem);
    right: 0;
  }

  .count {
    position: absolute;
    top: 1rem;
    left: 2.25rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.875rem;
    font-weight: 400;
    user-select: none;
  }

  @media (max-width: 600px) {
    .container {
      width: 100%;
      height: 75%;

      img {
        max-height: 90%;
      }
    }

    .close-button {
      padding-left: 1.5rem;
      padding-bottom: 1.5rem;
    }

    .close-button svg {
      height: 1.25rem;
      width: 1.25rem;
    }

    .actions-container {
      margin-bottom: 5rem;
      padding: 0 2rem;
      width: 100%;
      display: flex;
      justify-content: center;
      z-index: 9999;
    }

    .actions {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0;
      background-color: #232327;
      border: 1px solid #111112;
      box-shadow: inset 0 1px 1px #3f3f46;
      border-radius: 0.3125rem;
    }

    .previous-button,
    .next-button {
      padding: 1rem 1.5rem;
      width: 100%;
      position: relative;
      top: unset;
      left: unset;
      right: unset;
      bottom: unset;
      border-radius: 0;
      color: #d3d3d8;

      svg {
        height: 1.625rem;
        width: 1.625rem;
      }
    }

    .previous-button {
      border-right: 1px solid #111112;
    }
  }
`;
