import React from 'react';
import styled from 'styled-components';
import {
    Button,
    Link,
    Thumbnail,
} from '../ui';

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
    font-size: 20px;
`;

const ButtonWrap = styled.div`
    flex: 1;
`;

/*
    This component displays a single reservation's details
    on the reservations list page.
*/
export const ReservationsListItem = ({ item: reservation, onSelect }) => {
    const { restaurant } = reservation;
    return (
        <ListItemContainer>
            <ThumbnailWrap>
                <Thumbnail width='100px' height='100px' url={restaurant.imageUrl} />
            </ThumbnailWrap>
            <DetailsSection>
                <Link to={`/restaurants/${restaurant.id}`}>
                    <MainDetail>{restaurant.name}</MainDetail>
                </Link>
                <div>{reservation.date} @ {reservation.time}</div>
                <div>{reservation.numberOfPeople} people</div>
            </DetailsSection>
            <ButtonWrap>
                <Button
                    type='shadow'
                    onClick={() => onSelect(reservation)}
                >View</Button>
            </ButtonWrap>
        </ListItemContainer>
    );
}