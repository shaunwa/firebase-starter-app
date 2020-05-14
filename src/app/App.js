import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  CreateAccountPage,
  EmailConfirmationLanderPage,
  SignInPage,
} from '../auth';
import { ReservationsListPage } from '../reservations';
import {
  RestaurantDetailPage,
  SearchPage,
} from '../restaurants';
import {
  WriteAReviewPage,
  WriteAReviewThankYouPage,
} from '../reviews';
import { EditProfilePage } from '../user';
import './App.css';

/*
  This is the main React component that we render the rest of
  of app's components inside of. In our app, we're using this
  component to hold the Router and all the different Routes our
  app supports.
*/
export function App() {
  return (
    <Router>
      <Switch>
        <Route path='/sign-in'>
          <SignInPage />
        </Route>
        <Route path='/create-account'>
          <CreateAccountPage />
        </Route>
        <Route path='/edit-profile'>
          <EditProfilePage />
        </Route>
        <Route path='/email-confirmation/success'>
          <EmailConfirmationLanderPage success />
        </Route>
        <Route path='/email-confirmation/failure'>
          <EmailConfirmationLanderPage />
        </Route>
        <Route path='/' exact>
          <ReservationsListPage />
        </Route>
        <Route path='/search'>
          <SearchPage />
        </Route>
        <Route path='/restaurants/:id'>
          <RestaurantDetailPage />
        </Route>
        <Route path='/write-a-review/:id'>
          <WriteAReviewPage />
        </Route>
        <Route path='/review/thank-you'>
          <WriteAReviewThankYouPage />
        </Route>
      </Switch>
    </Router>
  );
}
