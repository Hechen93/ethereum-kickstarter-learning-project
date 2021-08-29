//File for all global reusable components for the served Next pages

import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import Head from "next/head";
import "semantic-ui-css/semantic.min.css";

export default (props) => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};
