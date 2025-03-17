"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

const slides = [
  {
    id: 0,
    quote:
      "We saw our stone today. It is even better than I pictured it in my mind. Although we made changes all the way, you were always patient. You were truly concerned with us being pleased with the final outcome. The artist that completed the family tree did superb work. I love the way he made the branches stand out! Beautiful contrast. Thanks to all of you at Zabel.",
    source: "Ted & Luanne Bergstrom",
  },
  {
    id: 1,
    quote:
      "Thank you for all your help. You were so compassionate and informational. You made a difficult task very easy. We are so pleased with the marker. We tell everyone to go to you for the best looking markers. Thank you again!",
    source: "A. Meyer",
  },
  {
    id: 2,
    quote:
      "Chris' headstone has brought me more comfort than you could ever know. I thank you for the advice you've offered and the love that went into that beautiful pair of hearts. He would have loved it, this I am certain of. Thank you from the bottom of my heart.",
    source: "D. Brey",
  },
  {
    id: 3,
    quote:
      "Thank you so much for the beautiful monument. The workmanship is outstanding, but mostly we want to thank you for helping us through this tough time. It took us so long to come to terms with our son's death but you made it bearable.",
    source: "Cindy & Dick Herrmann",
  },
  {
    id: 4,
    quote:
      "Thank you so much for doing such a wonderful job with our headstone. Your sales lady Sharon helped us so much with her compassion and over the top personal service. She took something that I thought would be a difficult process and made it easy. The monument is all that we wanted and more, it brought tears to our eyes. Thank you again for your wonderful service.",
    source: "H. Lorfeld",
  },
  {
    id: 5,
    quote:
      "I can't thank you enough for taking the stone out on Aug. 19th. It meant so much to me. The entire family, went to the cemetery that Friday night to see the bench. The kids thought it was perfect.",
    source: "Denise Mecha",
  },
  {
    id: 6,
    quote:
      "I wish I could express how wonderful it is to find someone like you who took the time to take a personal interest. You made me feel like an individual, not just the next item on a schedule. Bless you for that personal interest. You are a very warm and caring person. God bless and take care.",
    source: "Jean Engle",
  },
  {
    id: 7,
    quote:
      "You and your colleagues at Zabel come into people's lives when they are at their most terrible point, and you leave them with a sense of closure and healing, secure in the feeling that things have been done right. You have been patient, rigorous and professional but most of all, you have been kind and helpful when I most needed it.",
    source: "Ben Zion",
  },
  {
    id: 8,
    quote:
      "Thank you so much for the wonderful job you did on Renee's headstone. Everyone is so pleased and it really is beautiful! Your patience, help and suggestions were more than anyone could expect. It has been a great experience working with you.",
    source: "Jeannine Herzog & Family",
  },
  {
    id: 9,
    quote:
      "We are so grateful for your kindness and thoughtfulness with our son's monument. It was a very tough time for us and you treated us with tenderness and respect, yet you were able to keep us directed on it without being pushy. The stone turned out beautiful. We have been receiving a lot of compliments on your work. Thanks so much for all your time and help.",
    source: "Gerald & Michell Hoerth",
  },
  {
    id: 10,
    quote:
      "We saw our stone today. It is even better than I pictured it in my mind. Although we made changes all the way, you were always patient. You were truly concerned with us being pleased with the final outcome. The artist that completed the family tree did superb work. I love the way he made the branches stand out! Beautiful contrast. Thanks to all of you at Zabel.",
    source: "Ted & Luanne Bergstrom",
  },
  {
    id: 11,
    quote:
      "Thank you for all your help. You were so compassionate and informational. You made a difficult task very easy. We are so pleased with the marker. We tell everyone to go to you for the best looking markers. Thank you again!",
    source: "A. Meyer",
  },
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [clickDisabled, setClickDisabled] = useState(false);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const transitionSpeed = 500;
  const totalSlides = slides.length - 2;

  useEffect(() => {
    if (activeSlide === slides.length - 1) {
      setClickDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setActiveSlide(1);
      }, transitionSpeed);
    }

    if (activeSlide === 1) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }

    if (activeSlide === 0) {
      setClickDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setActiveSlide(slides.length - 2);
      }, transitionSpeed);
    }

    if (activeSlide === slides.length - 2) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }
  }, [activeSlide]);

  useEffect(() => {
    if (clickDisabled) {
      setTimeout(() => {
        setClickDisabled(false);
      }, transitionSpeed * 2);
    }
  }, [clickDisabled]);

  const handlePrevClick = () => {
    setActiveSlide((prevQuote) => prevQuote - 1);
  };

  const handleNextClick = () => {
    setActiveSlide(activeSlide + 1);
  };

  return (
    <TestimonialsStyles
      $activeslide={activeSlide}
      $transitionspeed={transitionSpeed}
      aria-labelledby="carousel-heading"
    >
      <div className="testimonial-container">
        <svg className="quote-svg" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <h3 id="carousel-heading">Hear from our customers</h3>
        <ul className="grid">
          {slides.map((t, i) => (
            <li
              key={t.id}
              className={`grid-item${activeSlide === i ? " active" : ""}${
                hasTransitionClass ? " transition" : ""
              }`}
            >
              <div className="quote">{t.quote}</div>
              <div className="source">- {t.source}</div>
            </li>
          ))}
        </ul>
        <div aria-live="polite" aria-atomic="true" className="count">
          {activeSlide === 0
            ? totalSlides
            : activeSlide === slides.length - 1
            ? "1"
            : activeSlide}{" "}
          of {totalSlides}
        </div>
        <div className="actions">
          <button
            type="button"
            className="previous-button"
            onClick={handlePrevClick}
            disabled={clickDisabled}
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Go to previous testimonial</span>
          </button>
          <button
            type="button"
            className="next-button"
            onClick={handleNextClick}
            disabled={clickDisabled}
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Go to next testimonial</span>
          </button>
        </div>
      </div>
    </TestimonialsStyles>
  );
}

type StyleType = {
  $activeslide: number;
  $transitionspeed: number;
};

const TestimonialsStyles = styled.section<StyleType>`
  padding: 2rem 1.5rem 5rem;
  overflow-x: hidden;

  h3 {
    margin: 0 0 1rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    text-align: center;
  }

  .grid {
    margin: 0 auto;
    display: flex;
  }

  .grid-item {
    margin: 0 auto;
    position: relative;
    width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${(props) => `translateX(${props.$activeslide * -100}%)`};
    opacity: 0;

    &.active {
      opacity: 1;
    }

    &.active.transition {
      transition: transform ${(props) => props.$transitionspeed}ms ease-out,
        opacity ${(props) => props.$transitionspeed}ms linear 300ms;
    }
  }

  .quote-svg {
    margin: 0 auto 1.25rem;
    height: 2.5rem;
    width: 2.5rem;
    color: #cbd5e1;
  }

  .testimonial-container {
    margin: 0 auto;
    padding: 0 8rem;
    position: relative;
    max-width: 1024px;
    width: 100%;
    text-align: center;
  }

  .quote {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1f2937;
    line-height: 1.75;
    text-align: center;
  }

  .source {
    margin: 2rem 0 0;
    color: #406597;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.05em;
  }

  .count {
    margin: 1.25rem 0 0;
    font-family: "Merriweather", Georgia, "Times New Roman", Times, serif;
    font-size: 0.875rem;
    font-style: italic;
    color: #6b7280;
    text-align: center;
  }

  .previous-button,
  .next-button {
    padding: 0.5rem;
    position: absolute;
    top: calc(50% - 2rem);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #94a3b8;
    background-color: #f8fafc;
    border: none;
    border-radius: 0.125rem;

    &:hover {
      color: #171717;
    }

    &:focus {
      outline-color: #1967d2;
    }

    svg {
      height: 1.75rem;
      width: 1.75rem;
    }
  }

  .previous-button {
    left: 0;
  }

  .next-button {
    right: 0;
  }

  @media (max-width: 600px) {
    padding-bottom: 6.5rem;

    .testimonial-container {
      padding: 0 2rem;
    }

    .actions {
      margin: 2rem 0 0;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .previous-button,
    .next-button {
      padding: 0.75rem;
      position: relative;
      top: unset;
      left: unset;
      right: unset;
      background-color: #fff;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    }

    .count {
      position: absolute;
      bottom: -2.75rem;
      left: 0;
      width: 100%;
    }
  }
`;
