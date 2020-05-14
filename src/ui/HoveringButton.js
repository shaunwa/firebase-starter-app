import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const StyledButton = styled(Button)`
    bottom: 32px;
    box-shadow: 0px 10px 10px #888;
    left: 50%;
    margin-left: -100px;
    position: fixed;
`;

export const HoveringButton = ({ onClick, children }) =>
    <StyledButton onClick={onClick}>{children}</StyledButton>