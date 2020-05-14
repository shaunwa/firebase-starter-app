import React from 'react';
import styled from 'styled-components';

const PageBackground = styled.div`
    background-color: #eee;
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
`;

const ContentBox = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
`;

export const CenteredContentBox = ({ children }) =>
    <PageBackground>
        <ContentBox>
            {children}
        </ContentBox>
    </PageBackground>