import React from "react";
import { styled } from "styled-components";

const Section = ({ info }) => {
  return (
    <Wrap $bgImage={info.image} id={info.id}>
      <ItemText>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton $marginBottom={`${!info.rightButton ? "4rem" : 0}`}>
            {info.leftButton}
          </LeftButton>
          {info.rightButton && <RightButton>{info.rightButton}</RightButton>}
        </ButtonGroup>
        {info.rightButton && <DownArrow src="/images/down-arrow.svg" />}
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => `url("/images/${props.$bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  animation: slideInFromBottom 1s ease-in, fadeIn 1s ease-in;
  /* animation: fadeIn 1s ease-in; */
`;

const ButtonGroup = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    height: 8rem;
    flex-direction: column;
  }
`;

const LeftButton = styled.button`
  color: #fff;
  background-color: #333;
  height: 2.5rem;
  width: 16rem;
  margin: 0 1rem;
  outline: none;
  border-radius: 6rem;
  opacity: 0.9;
  text-transform: uppercase;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  font-family: inherit;
  margin-bottom: ${(props) => {
    return props.$marginBottom;
  }};
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: #333;
`;

const DownArrow = styled.img`
  margin: 0 auto;
  margin-top: 1.5rem;
  display: block;
  height: 2.5rem;
  animation: animateDown infinite 1.5s;
  cursor: pointer;
`;

const Buttons = styled.div`
  animation: slideInFromBottom 1s ease-in, fadeIn 1s ease-in;
`;
