import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Button,
    HeadingSmall,
    TextInput,
} from '../ui';

const FullWidthTextInput = styled(TextInput)`
    display: block;
    width: 100%;
    margin-bottom: 16px;
`;

const FullWidthButton = styled(Button)`
    display: block;
    width: 100%;
`;

/*
    This is the content for the modal that gets shown to users
    when they click "Forgot Password" on the Sign-In Page.
*/
export const ResetPasswordForm = ({ onClose = () => {} }) => {
    const [emailAddress, setEmailAddress] = useState('');

    const onClickSend = async () => {
        // Firebase-related code goes here
    }

    return (
        <div>
            <HeadingSmall>Reset Password</HeadingSmall>
            <FullWidthTextInput
                onChange={e => setEmailAddress(e.target.value)}
                placeholder="Enter your email address" />
            <FullWidthButton onClick={onClickSend}>Send Email</FullWidthButton>
        </div>
    )
}