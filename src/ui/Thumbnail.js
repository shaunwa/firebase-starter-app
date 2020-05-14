import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
    background-color: #aaa;
    border-radius: 8px;
    display: inline-block;
    background-image: url(${props => props.url});
    background-size: cover;
`;

export const Thumbnail = ({ height, width, url, ...rest }) => {
    return (
        <Image 
        {...rest}
        url={url}
        style={{
            height,
            width,
            ...rest.style,
        }} />
    )
}