import React from "react";
import GlobalStyles from "../GlobalStyles";
import SearchHeader from "../components/SearchHeader";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import { BrowserRouter } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h4,
  p {
    text-align: center;
    padding-bottom: 1em;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1em 3.2em;
`;

export function ListPage() {
  return (
    <>
      <Container>
        <GlobalStyles />
        <BrowserRouter>
          <SearchHeader />
          <Main>
            <ul>
              <li>ListItem</li>
              <li>ListItem</li>
              <li>ListItem</li>
              <li>ListItem</li>
              <li>ListItem</li>
              <li>ListItem</li>
              <li>ListItem</li>
              <li>ListItem</li>
              <li>ListItem</li>
              <li>ListItem</li>
              <li>ListItem</li>
              <li>ListItem</li>
              <li>ListItem</li>
            </ul>
          </Main>
          <Footer />
        </BrowserRouter>
      </Container>
    </>
  );
}