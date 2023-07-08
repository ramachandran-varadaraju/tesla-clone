import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {}, []);

  const burgerMenuHandler = () => {
    setMenuClicked((prevState) => {
      return !prevState;
    });
  };

  return (
    <Container>
      <Logo>
        <img src="/images/logo.svg" alt="logo" />
      </Logo>
      <Menu>
        <UnOrderedList>
          <List>
            <Link href="#0">Model S</Link>
          </List>
          <List>
            <Link href="#1">Model 3</Link>
          </List>
          <List>
            <Link href="#2">Model X</Link>
          </List>
          <List>
            <Link href="#3">Model Y</Link>
          </List>
        </UnOrderedList>
      </Menu>
      <RightMenu>
        <UnOrderedList>
          <List>
            <Link href="#">Shop</Link>
          </List>
          <List>
            <Link href="#">Tesla Account</Link>
          </List>
          <List>
            <Link
              onClick={burgerMenuHandler}
              href="#"
              $noHover={"border-bottom:none"}
            >
              {!menuClicked && <i className="fa-solid fa-bars"></i>}
              {menuClicked && <i className="fa-solid fa-xmark"></i>}
            </Link>
          </List>
        </UnOrderedList>
      </RightMenu>
      {menuClicked && (
        <BurgerNav>
          {/* <i onClick={burgerMenuHandler} className="fa-solid fa-xmark"></i> */}
          <li>
            <a href="#0">Model S</a>
          </li>
          <li>
            <a href="#1">Model 3</a>
          </li>
          <li>
            <a href="#2">Model X</a>
          </li>
          <li>
            <a href="#3">Model Y</a>
          </li>
          <li>
            <a href="#existinginventory">Existing Inventory</a>
          </li>
          <li>
            <a href="#usedinventory">Used Inventory</a>
          </li>
          <li>
            <a href="#tradein">Trade-in</a>
          </li>
          <li>
            <a href="#cybertruck">CyberTruck</a>
          </li>
          <li>
            <a href="#roadster">Roadster</a>
          </li>
          <li>
            <a href="#semi">Semi</a>
          </li>
          <li>
            <a href="#charging">Charging</a>
          </li>
          <li>
            <a href="#commercial">Commercial</a>
          </li>
        </BurgerNav>
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  min-height: 4rem;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 456px) {
    flex-direction: column;
    justify-content: space-around;
    /* min-height: 6rem; */
  }
  padding: 0 1.5rem;
`;

const Logo = styled.a``;

const Menu = styled.nav`
  @media (max-width: 886px) {
    display: none;
  }
`;

const UnOrderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  /* width: 25rem; */
  display: flex;
  justify-content: space-around;
`;

const List = styled.li`
  /* padding: 0 1rem; */
  margin: 0 1rem;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  @media (max-width: 900px) {
    font-size: 15px;
  }
  @media (max-width: 800px) {
    font-size: 14px;
  }
  text-transform: uppercase;
  padding-bottom: 3px;
  &:hover {
    border-bottom: ${(props) =>
      `${props.$noHover ? "none" : "3px solid white"}`};
  }
`;

const RightMenu = styled.div``;

const BurgerNav = styled.ul`
  list-style: none;
  color: #fff;
  padding: 0;
  margin: 0;
  position: fixed;
  margin-top: 4rem;
  z-index: 100;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  min-width: 300px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  i {
    color: white;
    align-self: flex-end;
    cursor: pointer;
  }

  li {
    padding-bottom: 3px;
    border-bottom: 0.5px solid #ccc;
  }

  a {
    color: #fff;
    font-weight: 600;
  }
`;
