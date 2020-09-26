import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import List from "../components/List";
import { fetchResults } from "../api/results";
import ArrowSrc from "../assets/icons/arrowRight.svg";
import LocationSrc from "../assets/icons/location.svg";
import DateSrc from "../assets/icons/date.svg";
import TimeSrc from "../assets/icons/time.svg";
import { SearchPageLayout } from "../components/PageLayout";

const ListItem = styled.a`
  display: grid;
  grid-template: 6em 1fr 1em / 3em 1fr 4em;
  align-items: center;
  margin-top: 1.2em;
  border-bottom: 1px solid #eeeeee;
  text-align: left;
  text-decoration: none;
  color: var(--font-semi-dark);
`;

const CategoryImage = styled.img`
  grid-column: 1 / 2;
  max-height: 2em;
`;

const Description = styled.div`
  grid-column: 2 / 3;
  padding-left: 1em;

  img {
    height: 1.2em;
    padding-right: 0.3em;
  }
  h3,
  p {
    padding-bottom: 0.5em;
  }
  p {
    font-size: 0.8em;
  }
  span {
    padding-right: 1em;
  }
`;

const ArrowIcon = styled.img`
  grid-column: 3 / 4;
  max-height: 1em;
`;

export function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const offers = await fetchResults();
      setResults(offers);
    }
    fetchData();
  }, []);

  return (
    <SearchPageLayout showFooter>
      <List>
        {results.map((result) => (
          <ListItem key={result._id} href={`/offers/${result._id}`}>
            <CategoryImage
              src={`/categories/${result.category}.svg`}
              alt="offer title"
            />
            <Description>
              <h3>{result.title}</h3>
              <p>
                <img src={LocationSrc} alt="locationpicker icon" />
                {result.location.zip} {result.location.city}
              </p>
              <p>
                <span>
                  <img src={DateSrc} alt="calendar icon" />
                  {result.date}
                </span>
                <span>
                  <img src={TimeSrc} alt="clock icon" />
                  {result.start_time} - {result.end_time} Uhr
                </span>
              </p>
            </Description>
            <ArrowIcon src={ArrowSrc} alt="offer title" />
          </ListItem>
        ))}
      </List>
    </SearchPageLayout>
  );
}
