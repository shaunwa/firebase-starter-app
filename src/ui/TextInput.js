import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: 2px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    padding: 16px;

    ::placeholder {
        color: #ddd;
    }
`;

export const TextInput = ({ ...rest }) => {
    return (
        <StyledInput type='text' {...rest} />
    );
}