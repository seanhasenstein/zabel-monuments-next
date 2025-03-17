"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styled from "styled-components";

import Lightbox from "./Lightbox";

import useLightbox from "../hooks/useLightbox";
import { slugify } from "../utils";

import { ImageMetadata } from "../types";

const galleryLinks = [
  {
    id: 1,
    label: "Individual Monuments",
    slug: "individual-monuments",
  },
  {
    id: 2,
    label: "Companion Monuments",
    slug: "companion-monuments",
  },
  {
    id: 3,
    label: "Hmong Monuments",
    slug: "hmong-monuments",
  },
  {
    id: 4,
    label: "Jewish Monuments",
    slug: "jewish-monuments",
  },
  {
    id: 5,
    label: "Slant Monuments",
    slug: "slant-monuments",
  },
  {
    id: 6,
    label: "Etchings",
    slug: "etchings",
  },
  {
    id: 7,
    label: "Garden Art",
    slug: "garden-art",
  },
];

type Props = {
  galleryImages: ImageMetadata[];
  galleryName: string;
};

export default function Gallery({ galleryImages, galleryName }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const galleryProps = useLightbox(galleryImages);
  const { handleClick, ...lightboxProps } = galleryProps;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/gallery/${e.target.value}`);
  };

  return (
    <>
      <GalleryPageStyles>
        <div className="container">
          <aside>
            <div className="sidebar-box">
              {galleryLinks.map((l) => (
                <Link
                  key={l.id}
                  href={`/gallery/${l.slug}`}
                  className={pathname === `/gallery/${l.slug}` ? "current" : ""}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </aside>
          <div className="gallery">
            <h2>
              <span>{galleryName} Gallery</span>
            </h2>
            <div className="mobile-nav">
              <select
                onChange={handleSelectChange}
                value={slugify(galleryName)}
              >
                {galleryLinks.map((l) => (
                  <option key={l.id} value={l.slug}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
            {galleryProps.images.length === 0 ? (
              <div className="empty-message">
                There are currently no photos in this gallery.
              </div>
            ) : (
              <div className="grid">
                {galleryProps.images.map((image, index) => (
                  <button
                    key={image.key}
                    onClick={(e) => handleClick(e, index)}
                    className="grid-item"
                  >
                    <img
                      src={image.url}
                      alt={`${galleryName} photo ${index + 1} of ${
                        galleryProps.images.length
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </GalleryPageStyles>
      <Lightbox {...lightboxProps} galleryName={galleryName} />
    </>
  );
}

const GalleryPageStyles = styled.div`
  padding: 0 1.5rem;

  .container {
    margin: 0 auto;
    padding: 5rem 0 6rem;
    display: flex;
    max-width: 1000px;
    width: 100%;
  }

  h2 {
    margin: 0 0 3rem;
    position: relative;
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    text-align: center;
    user-select: none;

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

  .mobile-nav {
    display: none;
  }

  .gallery {
    width: 100%;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(8rem, 1fr));
    gap: 0.875rem;
  }

  .grid-item {
    position: relative;
    padding: 0;
    aspect-ratio: 4 / 3;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    border: 5px solid #fff;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    user-select: none;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      box-shadow: inset 0 -70px 70px rgba(20, 20, 20, 0.25);
      transition: box-shadow 200ms ease-in-out;
    }

    &:hover::after {
      box-shadow: inset 0 -70px 70px rgba(20, 20, 20, 0);
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .empty-message {
    color: #64748b;
  }

  aside {
    padding: 0 5rem 0 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    max-width: 21rem;
    width: 100%;

    .sidebar-box {
      padding: 0.5rem 0.375rem 0.5rem 0.5rem;
      background-color: #fff;
      border-radius: 0.125rem;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
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
      border-bottom: 1px solid #f1f5f9;
      user-select: none;

      &:first-of-type {
        border-top: 1px solid #f1f5f9;
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
        box-shadow: #fff 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
          rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      }

      &.current,
      &.current:hover {
        margin-top: -1px;
        font-weight: 500;
        color: #fff;
        text-shadow: 0 1px 1px #527c34;
        background-color: #6ea546;
        border-top: none;
        border-bottom: 1px solid #527c34;
        border-radius: 0.125rem 0 0 0.125rem;

        &:after {
          border-left: 1.125rem solid #6ea546;
        }
      }
    }
  }

  @media (max-width: 991px) {
    aside {
      padding: 0 3rem 0 0;
      max-width: 19rem;
    }

    .grid {
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    }
  }

  @media (max-width: 767px) {
    .container {
      padding: 3.5rem 0;
    }

    .mobile-nav {
      margin: 0 auto 2rem;
      display: flex;
      justify-content: center;

      select {
        min-width: 15rem;
      }
    }

    aside {
      display: none;
    }

    .grid {
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }
  }

  @media (max-width: 560px) {
    h2 {
      span {
        padding: 0;
        position: relative;
        background-color: transparent;
        z-index: 1;
      }

      &::after {
        content: "";
        position: static;
        left: 0;
        top: 0;
        width: 100%;
        height: 0px;
        background-color: transparent;
        z-index: 0;
      }
    }

    .grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.625rem;
    }

    .grid-item {
      border: 3px solid #fff;
    }

    .mobile-nav select {
      width: 100%;
    }
  }
`;
