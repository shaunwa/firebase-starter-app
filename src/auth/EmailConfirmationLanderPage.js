import React from 'react';
import { LanderPage } from '../ui';

const SuccessMessage = () => (
    <LanderPage
        heading='Thanks for confirming!'
        message={`
            Woohoo! Now that you've confirmed your email,
            sign in to start making reservations.
        `}
        buttonText='Sign In'
        redirectUrl='/sign-in' />
);

const FailureMessage = () => (
    <LanderPage
        heading='Uh oh...'
        message={`
            It looks like something went wrong with your confirmation.
            If you waited a while since creating your account, you may have
            to create it again.
        `}
        buttonText='Create account'
        redirectUrl='/create-account' />
);

/*
    This is the page/component that the user will land on
    when they attempt to confirm their email. We'll have Firebase
    send them to either the "success" or "failure" route, depending
    on whether or not their confirmation was successful.
*/
export const EmailConfirmationLanderPage = ({ success }) => {
    return success
        ? <SuccessMessage />
        : <FailureMessage />
}