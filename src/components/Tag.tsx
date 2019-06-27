import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
    value: string;
}

const StyledTag = styled.span`
    font-size: 10px;
    background: blue;
    color: white;
    padding: 5px 10px;
    border-radius: 190px;
`;

const Tag: FC<Props> = ({ value }) => {
    return <StyledTag>{value}</StyledTag>;
};
export { Tag };
