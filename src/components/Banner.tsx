import React from 'react';
import styled from 'styled-components';
import banner from '../assets/images/c18.jpg';

const StyledBanner = styled.div`
  img {
      height: 210px;
      object-fit: cover;
      width: 100%;
  }
`;

const Banner = () => (
    <StyledBanner>
      <img src={banner} alt='Banner' />
    </StyledBanner>
);

export {Banner};