import React from 'react';
import styled from 'styled-components';
import {
    Button,
    Heading,
    Thumbnail,
} from '../ui';

const Form = styled.div`
    width: 350px;
    margin: 0 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const InfoSection = styled.table`
    text-align: left;
    padding: 16px;
`;

const InfoSectionCell = styled.td`
    padding: 8px;
`;

const LeftCell = styled(InfoSectionCell)`
    font-weight: bold;
    width: 30%;
`;

const RightCell = styled(InfoSectionCell)`
`;

const FullWidthButton = styled(Button)`
    display: block;
    width: 100%;
`;

const withTopMargin = px => ({ marginTop: `${px}px` });

/*
    This component is displayed inside a modal when the user clicks
    "view" on a given item on the reservations list page. It shows
    basic details about the reservation, and also allows users
    to cancel their reservation.
*/
export const ReservationDetailPage = ({ reservation, onClose = () => {} }) => {
    const { restaurant, date, time } = reservation || {};
    const { name, address = {}, imageUrl } = restaurant || {};

    const onClickCancel = async () => {
        // Firebase code goes here
    }

    return (
        <Form>
            <Heading>Your reservation at<br />{name}:</Heading>
            <Thumbnail height="150px" width="300px" url={imageUrl} />
            <InfoSection>
                <tbody>
                    <tr>
                        <LeftCell>Date:</LeftCell>
                        <RightCell>{date}</RightCell>
                    </tr>
                    <tr>
                        <LeftCell>Time:</LeftCell>
                        <RightCell>{time}</RightCell>
                    </tr>
                    <tr>
                        <LeftCell>Address:</LeftCell>
                        <RightCell>
                            {address.street},<br/>
                            {address.city},&nbsp;
                            {address.state}&nbsp;{address.zipCode}
                        </RightCell>
                    </tr>
                </tbody>
            </InfoSection>
            <FullWidthButton onClick={onClickCancel} style={withTopMargin(8)}>
                Cancel Reservation
            </FullWidthButton>
        </Form>
    );
}