import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
    title: string;
    url: string;
    target: string;
}

const StyledLinkButton = styled.a`
    text-decoration: none;
    color: blue;
    padding: 4px;
    text-align: center;
    &:hover {
        color: darkblue;
    }
`;

const LinkButton: FC<Props> = ({ title, url, target }) => {
    return <StyledLinkButton target={target} href={url}>{title}</StyledLinkButton>;
};

export { LinkButton };
