import React from 'react';
import { LanderPage } from '../ui';

/*
    This component is shown after a user successfully submits
    a review for a restaurant.
*/
export const WriteAReviewThankYouPage = () => (
    <LanderPage
        heading="Review Submitted"
        message="Thanks for leaving your review!"
        buttonText='Done'
        redirectUrl='/' />
);
