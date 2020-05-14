import React from 'react';
import styled from 'styled-components';

const PageBackground = styled.div`
    background-color: #eee;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
`;

const ContentSection = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 800px;
    min-height: 100vh;
    padding: 16px;
`;

export const MaxWidthContentSection = ({ children }) => {
    return (
        <PageBackground>
            <ContentSection>
                {children}
            </ContentSection>
        </PageBackground>
    );
}
