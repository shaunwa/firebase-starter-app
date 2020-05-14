import styled from 'styled-components';

export const TextArea = styled.textarea`
    border: 2px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 16px;
    outline: none;
    padding: 16px;

    ::placeholder {
        color: #ddd;
    }
`;