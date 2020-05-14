import React from 'react';
import styled from 'styled-components';
import { Rating, Thumbnail } from '../ui';

const ListItemContainer = styled.div`
    align-items: center;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding: 16px;
    width: 100%;
`;

const ThumbnailWrap = styled.div`
    flex: 2;
`;

const DetailsSection = styled.div`
    flex: 8;
`;

const MainDetail = styled.div`
    font-weight: bold;
    font-size: 16px;
`;

/*
    This component displays the basic info for a single restaurant review,
    such as rating, author, text, and the author's profile picture.
*/
export const ReviewListItem = ({ item: review }) => {
    const { author = {}, rating, text, imageUrls = [] } = review;
    const { firstName, lastName, profilePictureUrl } = author;
    return (
        <ListItemContainer>
            <ThumbnailWrap>
                <Thumbnail
                    width='100px'
                    height='100px'
                    url={profilePictureUrl} />
            </ThumbnailWrap>
            <DetailsSection>
                <MainDetail>{firstName} {lastName}</MainDetail>
                <Rating
                    value={rating}
                    readOnly />
                <div>{text}</div>
                {imageUrls.map(url => (
                    <Thumbnail
                        key={url}
                        width='200px'
                        height='200px'
                        style={{ margin: '8px' }}
                        url={url} />
                ))}
            </DetailsSection>
        </ListItemContainer>
    );
}