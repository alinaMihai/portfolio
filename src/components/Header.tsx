import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
   display:flex;
   background-color: black;
   height: 60px;
   color: white;
   align-items: center;
   span{
       margin-left: 10px;
       font-size: 18px;
       font-weight: bold;
   }
`;

const Header = () => (
    <StyledHeader><span>Portfolio</span></StyledHeader>
);

export {Header};