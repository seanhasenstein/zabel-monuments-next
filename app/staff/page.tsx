"use client";

import styled from "styled-components";
import classNames from "classnames";

import PageShell from "@/components/PageShell";

const profiles = [
  {
    id: 1,
    name: "Eric Zabel",
    bio: [
      "Eric is a 3rd generation memorialist and current owner of Zabel Monuments. Eric is involved in all aspects of the business with a focus on lay-out, design and customization. Eric and his wife Claire, have three children. Away from work Eric enjoys cooking, camping and spending time with family and friends. Eric is a member of the Kansas City Barbeque Society and is a certified BBQ Judge.",
    ],
    image: "/images/staff/eric-2023.jpg",
  },
  {
    id: 2,
    name: "Karie Hessel",
    bio: [
      "Karie manages the Manitowoc office and fills in at our other locations when needed. Karie enjoys working with families and handles all aspects of customer service, including sales of a memorial for a loved one or pet, pre-need memorials, final dates and cleaning on existing markers. When not at work, Karie enjoys such hobbies as painting, reading and traveling.",
    ],
    image: null,
  },
  {
    id: 3,
    name: "Jamie Steeno",
    bio: [
      "Like you, Jamie believes that everyone's story is worth telling, either in a printed image or on stone.",
      "Jamie Steeno has come to Zabel Monuments with a diverse background. Jamie has her Master of Photography Degree, she has been earning both state and international awards telling stories with her photography. Jamie also has an Associates Degree in Accounting and a Master in Leadership and Communications.",
      "Jamie believes in volunteering, Givers Gain. She gets involved in raising money in her community for 5 to 6 charities each year. She volunteers on several boards. Jamie is currently the President of Wisconsin Professional Photographers Association, Inc, and has been involved since 2013. WPPA brings education to any photographer that wishes to get involved. She has her Fellowship with WPPA and is a member of the American Society of Photographers and Professional Photographers of America.",
      "Jamie enjoys traveling the National Parks via hiking or riding her Harley, continued education, teaching and living her DASH.",
      "Stop by and meet Jamie, let her document your story in stone at our Green Bay Store.",
    ],
    image: "/images/staff/jamie.jpg",
  },
  {
    id: 6,
    name: "Jennifer Wynveen",
    bio: [],
    image: "/images/staff/jennifer.jpg",
  },
  {
    id: 4,
    name: "Craig Rozmarynowski",
    bio: [
      "Craig comes to Zabel's with 15 years of construction experience. Craig runs the shop, including all sandblasting of memorials, painting and inscriptions. Craig takes pride in his work and makes sure everything leaving the shop passes his strict quality inspection. When Craig is not working, he enjoys spending time with his family and hunting.",
    ],
    image: null,
  },
  {
    id: 5,
    name: "John Zabel",
    bio: [
      "John is a 2nd generation memorialist and past owner of Zabel Monuments. John was involved in all aspects of the business. Now retired, John enjoys his time “up nort” in Three Lakes at his cabin with his wife Nancy. John and Nancy have three adult children and eight grandchildren. He is a member of Redeemer Lutheran Church and the Manitowoc Yacht Club.",
    ],
    image: null,
  },
];

export default function Staff() {
  return (
    <PageShell>
      <StaffPageStyles>
        <h2>Meet our staff</h2>
        <div className="grid">
          {profiles.map(({ bio, id, image, name }) => {
            const hasImg = !!image;
            const hasBio = bio.length > 0;
            const bioAndImgClass = hasBio && hasImg ? "has-bio-and-img" : "";
            const onlyImgClass = !hasBio && hasImg ? "only-img" : "";

            return (
              <div
                key={id}
                className={classNames(
                  "grid-item",
                  bioAndImgClass,
                  onlyImgClass
                )}
              >
                <h3 className="name">{name}</h3>
                {hasImg ? (
                  <div className="img">
                    <img src={image} alt={name} />
                  </div>
                ) : null}

                {hasBio ? (
                  <div className="bio">
                    {bio.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </StaffPageStyles>
    </PageShell>
  );
}

const StaffPageStyles = styled.div`
  .grid-item {
    padding: 2.25rem 0;
    border-bottom: 1px solid #d1d5db;

    &:first-of-type {
      padding-top: 0;
    }
  }

  .name {
    margin: 0;
    font-family: "poppins", sans-serif;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #1e293b;
  }

  .img {
    margin: 1.25rem 0 0;
  }

  .bio {
    margin: 1.25rem 0 0;

    p {
      margin: 0 0 1.5rem;

      &:last-of-type {
        margin: 0;
      }
    }
  }

  @media (min-width: 540px) {
    .grid-item {
      &:first-of-type {
        padding-top: 0.75rem;
      }
    }

    .grid-item.has-bio-and-img {
      display: grid;
      grid-template-columns: 20rem 1fr;
      grid-template-rows: 18px 1fr;
      grid-template-areas:
        "img name"
        "img bio";
    }

    .grid-item.only-img {
      .img {
        margin: 1.5rem 0 0;
        max-width: 20rem;
      }
    }

    .img {
      margin: 0 2rem 0 0;
      grid-area: img;
    }

    .name {
      grid-area: name;
      line-height: 1;
    }

    .bio {
      grid-area: bio;
    }
  }
`;
