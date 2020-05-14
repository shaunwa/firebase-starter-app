import React from 'react';
import { SignInForm } from './SignInForm';
import { CenteredContentBox } from '../ui';

/*
    This component basically just renders the Sign-In Form
    inside of a nice-looking content box.
*/
export const SignInPage = () => {
    return (
        <>
        <CenteredContentBox>
            <SignInForm />
        </CenteredContentBox>
        </>
    );
};