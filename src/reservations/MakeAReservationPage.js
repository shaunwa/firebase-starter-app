import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Button,
    DatePicker,
    HeadingSmall,
    TextInput,
} from '../ui';

const Content = styled.div`
    min-height: 375px;
    min-width: 625px;
`;

const TimeTable = styled.table`
    margin-top: 32px;
    text-align: center;
    width: 100%;
`;

// Displays the color as green if the time is available,
// i.e. if the "isAvaialable" prop is true
const TimeOption = styled.td`
    border: 2px solid ${({ selected }) => selected
        ? '#a4d22a;'
        : 'transparent'};
    border-radius: 8px;
    color: ${({ isAvailable }) => isAvailable ? '#a4d22a': '#888'};
    cursor: pointer;
    font-weight: bold;
    padding: 16px;
`;

const FullWidthButton = styled(Button)`
    margin-top: 32px;
    width: 100%;
`;

/*
    This is just a hard-coded list of all the different
    available times that our application allows. In reality,
    we'd probably want to have this stored in a database as well,
    but for simplicity, we're just going to do it this way.
*/
const possibleTimes = [
    ['5:00PM', '5:30PM', '6:00PM', '6:30PM'],
    ['7:00PM', '7:30PM', '8:00PM', '8:30PM'],
    ['9:00PM', '9:30PM', '10:00PM', '10:30PM'],
];

/*
    This component gets rendered inside of a modal when the user
    clicks "make a reservation" on the restaurant detail page. It contains
    a grid of different possible times that users can select and displays
    times in green if they're currently available.
*/
export const MakeAReservationPage = ({ restaurant, onClose = () => {} }) => {
    const [availableTimes, setAvailableTimes] = useState([]);
    const [availableTimesId, setAvailableTimesId] = useState('');

    // As a side note, the date picker library we're using uses the Moment.js
    // library. This will affect how we store and manipulate the selected date.
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [numberOfPeople, setNumberOfPeople] = useState(2);
    const [datePickerFocused, setDatePickerFocused] = useState(false);

    const onSubmit = async () => {
        // Firebase code goes here
    }

    return (
        <Content>
            <HeadingSmall style={{ marginBottom: '32px' }}>Choose a Date &amp; and Time</HeadingSmall>
            <DatePicker
                id='date-picker'
                date={selectedDate}
                onDateChange={newDate => {
                    setSelectedDate(newDate);
                }}
                focused={datePickerFocused}
                onFocusChange={({ focused }) => setDatePickerFocused(focused)}
            />
            <TimeTable>
                <tbody>
                    {possibleTimes.map(
                        (timeGroup, i) => (
                            <tr key={i}>
                                {timeGroup.map(time => {
                                    const isAvailable = false; // We'll use Firebase data to populate this
                                    return (
                                        <TimeOption
                                            key={time}
                                            isAvailable={isAvailable}
                                            selected={selectedTime === time}
                                            onClick={() => {
                                                if (isAvailable) setSelectedTime(time);
                                            }}
                                        >{time}</TimeOption>
                                    )
                                })}
                            </tr>
                        )
                    )}

                </tbody>
            </TimeTable>
            <div style={{ marginTop: '32px', textAlign: 'center' }}>
                How many people?
                <TextInput
                    style={{ marginLeft: '16px' }}
                    type="number"
                    value={numberOfPeople}
                    onChange={e => setNumberOfPeople(e.target.value)} />
            </div>
            <FullWidthButton onClick={onSubmit}>Make Reservation</FullWidthButton>
        </Content>
    )
}