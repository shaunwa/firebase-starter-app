import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
    Button,
    Heading,
    MaxWidthContentSection,
    SelectionList,
    TextInput,
} from '../ui';
import { RestaurantListItem } from './RestaurantListItem';

const SearchSection = styled.div`
    align-content: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 16px;
`;

/*
    This component has an input box that allows the user to search for restaurants.
    It displays a list of the search results, or if the user hasn't searched anything yet,
    it displays a list of recommended restaurants.
*/
export const SearchPage = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [searchString, setSearchString] = useState('');

    const history = useHistory();

    const onClickSearch = string => {
        setSearchString(searchInputValue);
    }

    useEffect(() => {
        // Firebase code for loading initial recommendations goes here
    }, []);

    useEffect(() => {
        // Firebase code for loading search results goes here
    }, [searchString]);
    
    return (
        <MaxWidthContentSection>
            <Heading>NEW RESERVATION</Heading>
            <SearchSection>
                <TextInput
                    placeholder='What are you in the mood for?'
                    style={{ flex: 5, marginRight: '8px' }}
                    value={searchInputValue}
                    onChange={e => setSearchInputValue(e.target.value)} />
                <Button
                    onClick={onClickSearch}
                    style={{ flex: 1 }}
                >Search</Button>
            </SearchSection>
            <SelectionList
                title='Suggestions'
                items={searchString ? searchResults : recommendations}
                keyProperty='id'
                onItemSelected={restaurant => {
                    history.push(`/restaurants/${restaurant.id}`);
                }}
                itemComponent={RestaurantListItem}/>
        </MaxWidthContentSection>
    )
};