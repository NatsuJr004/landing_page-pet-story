import React from "react";
import styled from 'styled-components';

export const Nav = styled.nav`
    max-width: 1440px;
    margin: auto;
    padding: 23px 100px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 500px){
        padding: 23px 20px;
    }
`;

export const BoxBtns = styled.div`
  display: flex;
  width: 250px;
  
  @media screen and (max-width: 500px){
    padding: 23px 20px;
    display: none;
  }
`;