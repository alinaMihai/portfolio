import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.header`
   display:flex;
   background-color: black;
   height: 60px;
   color: white;
   align-items: center;
   span{
       margin-left: 10px;
       font-size: 12px;
       font-weight: bold;
   }
`;

const Footer = () => (
    <StyledFooter><span>{new Date().getUTCFullYear()} © Alina Mihai Personal Portfolio</span></StyledFooter>
);

export {Footer};