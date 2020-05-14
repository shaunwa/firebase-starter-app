import React from 'react';
import styled from 'styled-components';
import { HeadingSmall } from './HeadingSmall';

const ListWrap = styled.div`
    width: 100%;
`;

export const SelectionList = ({
    title,
    items,
    keyProperty,
    onItemSelected,
    itemComponent: ItemComponent,
}) =>
    <ListWrap>
        {title ? <HeadingSmall>{title}</HeadingSmall> : null}
        {items.map(item => (
            <ItemComponent
                key={item[keyProperty]}
                onSelect={onItemSelected}
                item={item} />
        ))}
    </ListWrap>