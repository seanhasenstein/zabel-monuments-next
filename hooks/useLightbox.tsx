"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ImageMetadata } from "@/types";

export default function useLightbox(images: ImageMetadata[]) {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);
  const [shouldReturnFocus, setShouldReturnFocus] = useState(false);
  const [initFocusedImg, setInitFocusedImg] =
    useState<HTMLButtonElement | null>(null);
  const prevButton = useRef<HTMLButtonElement | null>(null);
  const nextButton = useRef<HTMLButtonElement | null>(null);
  const closeButton = useRef<HTMLButtonElement | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setShowLightbox(true);
    setSelectedImg(index);
    setShouldReturnFocus(true);
    setInitFocusedImg(e.currentTarget);
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const { activeElement } = document;
      const closeBtn = closeButton.current;
      const prevBtn = prevButton.current;
      const nextBtn = nextButton.current;

      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          if (selectedImg === images.length - 1) {
            return;
          } else {
            setSelectedImg(selectedImg + 1);
          }
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (selectedImg === 0) {
            return;
          } else {
            setSelectedImg(selectedImg - 1);
          }
          break;
        case "Tab":
          // SHIFT + TAB KEYS
          if (e.shiftKey) {
            e.preventDefault();
            if (closeBtn === activeElement) {
              if (nextBtn) {
                nextBtn.focus();
              } else if (prevBtn) {
                prevBtn.focus();
              }
              return;
            }
            if (prevBtn === activeElement) {
              closeBtn?.focus();
              return;
            }
            if (prevBtn) {
              prevBtn.focus();
            } else if (closeBtn) {
              closeBtn.focus();
            }
            // TAB KEY
          } else {
            e.preventDefault();
            if (nextBtn === activeElement) {
              if (closeBtn) {
                closeBtn.focus();
              }
              return;
            }
            if (prevBtn === activeElement) {
              if (nextBtn) {
                nextBtn.focus();
              } else if (closeBtn) {
                closeBtn.focus();
              }
              return;
            }
            if (prevBtn) {
              prevBtn.focus();
            } else if (nextBtn) {
              nextBtn.focus();
            } else if (closeBtn) {
              closeBtn.focus();
            }
          }
          break;
        case "Escape":
          setShowLightbox(false);
          break;
      }
    },
    [images.length, selectedImg]
  );

  useEffect(() => {
    if (!showLightbox && shouldReturnFocus) {
      initFocusedImg?.focus();
    }

    if (showLightbox) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "inherit";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [showLightbox, selectedImg, initFocusedImg, shouldReturnFocus, onKeyDown]);

  useEffect(() => {
    if (showLightbox) {
      closeButton.current?.focus();
    }
  }, [showLightbox]);

  // useEffect(() => {
  //   const handleClick = (e: MouseEvent) => {
  //     if (
  //       !imgRef.current?.contains(e.target as Node) &&
  //       !prevButton.current?.contains(e.target as Node) &&
  //       !nextButton.current?.contains(e.target as Node)
  //     ) {
  //       setShowLightbox(false);
  //     }
  //   };

  //   if (showLightbox) {
  //     document.addEventListener('click', handleClick);
  //   }

  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //   };
  // }, [nextButton, prevButton, setShowLightbox, showLightbox]);

  return {
    images,
    showLightbox,
    setShowLightbox,
    selectedImg,
    setSelectedImg,
    handleClick,
    prevButton,
    nextButton,
    closeButton,
    imgRef,
  };
}
