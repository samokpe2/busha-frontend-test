import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";


const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 160px;
  background-color: #f8f9fa;
  /* top-bar/1440px */
  /* top-bar */
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  height:28px;

   @media (max-width: 1024px) {
    padding: 14px 50px;
  }

   @media (max-width: 768px) {
    padding: 14px 10px; // Set padding to 0 on small screens
  }

`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row; // Ensure items are in a row
  }
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const MenuIcon = styled(FaBars)`
  font-size: 24px;
  cursor: pointer;
  margin-right: 10px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Username =  styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    /* or 100% */
    display: flex;
    align-items: center;
    text-align: right;
    color: #3E4C59;

     @media (max-width: 768px) {
        display: none; // Hide username on small screens
    }
`;



function Nav({ toggleSidebar }: { toggleSidebar: () => void }) {
    return (
      <NavBar>
        <LogoContainer>
          <MenuIcon onClick={toggleSidebar} />
          <Logo><img src="assets/images/logo.svg" alt="Logo" /></Logo>
        </LogoContainer>
        <UserSection>
          <Icon><img src="assets/images/user.svg" alt="User" /></Icon>
          <Username>Oluwatobi Akindunjoye</Username>
        </UserSection>
      </NavBar>
    );
  }

export default Nav;
