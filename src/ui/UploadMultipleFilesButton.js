import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    background-color: #a4d22a;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    padding: 16px;
    text-transform: uppercase;
`;

export const UploadMultipleFilesButton = ({ onFilesUploaded }) => {
    return (
        <StyledInput
            type='file'
            accept='image/png, image/jpeg'
            multiple
            onChange={
                // We have to use the spread operator because e.target.files
                // is a "FileList", not an Array. This converts it to an Array
                e => onFilesUploaded([...e.target.files])
            } />
    );
}