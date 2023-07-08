import React from "react";
import Section from "./Section";
import { styled } from "styled-components";

// import userinfo
import { carinfo } from "../utils/carinfo";

const Home = () => {
  return (
    <Container>
      {carinfo.map((info) => (
        <Section key={info.id} info={info} />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
