import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {
    Button,
    Heading,
    Link,
    MaxWidthContentSection,
    Modal,
    Rating,
    SelectionList,
    Tag,
    Thumbnail,
} from '../ui';
import { ReviewListItem } from '../reviews';
import { MakeAReservationPage } from '../reservations';

const ThumbnailWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DetailsSection = styled.div`
    flex: 8;
`;

const TagSection = styled.div`
    margin: 16px 0;
`;

const FullWidthButton = styled(Button)`
    margin-top: 16px;
    display: block;
    width: 100%;
`;

const CenteredButton = styled(Button)`
    display: block;
    margin: auto;
`;

/*
    This page displays detailed information about the selected restaurant,
    including a list of reviews that users have left. It also has a "make a reservation"
    button that displays a modal of available reservation times.
*/
export const RestaurantDetailPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [restaurant, setRestaurant] = useState({});
    const [reviews, setReviews] = useState([]);
    const { name, rating, address = {}, tags = [], bio } = restaurant || {};

    const { id } = useParams();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        // Firebase code for loading the restaurant goes here
    }, [id]);

    useEffect(() => {
        // Firebase code for loading the restaurant's reviews goes here
    }, [id]);

    // Display a loading message while the Firebase data is loading
    return isLoading ? <Heading>Loading...</Heading> : (
        <MaxWidthContentSection>
            <Heading>{name}</Heading>
            <ThumbnailWrap>
                <Thumbnail height='300px' width='600px' url={restaurant.imageUrl} />
            </ThumbnailWrap>
            <DetailsSection>
                <Rating
                    value={rating}
                    readOnly />
                <div>
                    {address.street},&nbsp;
                    {address.city}&nbsp;
                </div>
                <TagSection>
                    {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </TagSection>
                <div>{bio}</div>
            </DetailsSection>
            <FullWidthButton onClick={() => setModalIsOpen(true)}>Make a Reservation</FullWidthButton>
            <SelectionList
                title='Reviews'
                items={reviews}
                keyProperty='id'
                itemComponent={ReviewListItem} />
            <Link to={`/write-a-review/${restaurant.id}`}>
                <CenteredButton>Write A Review</CenteredButton>
            </Link>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}>
                    <MakeAReservationPage restaurant={restaurant} onClose={() => setModalIsOpen(false)} />
            </Modal>
        </MaxWidthContentSection>
    )
}