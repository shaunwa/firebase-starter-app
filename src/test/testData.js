const moment = require('moment');

// This is the format our application will be using to store dates
const dateFormat = moment => moment.format('MMMM DD, YYYY');

// The dates we'll populated Firestore with will be two weeks from
// the day you do so.
const twoWeeksFromNow = moment().add(2, 'weeks');
const twoWeeksOneDayFromNow = moment().add(2, 'weeks').add(1, 'day');
const twoWeeksTwoDaysFromNow = moment().add(2, 'weeks').add(2, 'days');

const reservations = [{
    id: '12345',
    restaurantId: '123',
    userId: 'PgjNHDAF6DRcolNIf03o4oe4IKF2', // replace these userIds with your own
    date: dateFormat(twoWeeksFromNow),
    time: '7:00PM',
    numberOfPeople: 2,
    createdAt: Date.now(),
}, {
    id: '12346',
    restaurantId: '345',
    userId: 'PgjNHDAF6DRcolNIf03o4oe4IKF2',
    date: dateFormat(twoWeeksOneDayFromNow),
    time: '6:30PM',
    numberOfPeople: 2,
    createdAt: Date.now(),
}, {
    id: '12347',
    restaurantId: '678',
    userId: 'PgjNHDAF6DRcolNIf03o4oe4IKF2',
    date: dateFormat(twoWeeksTwoDaysFromNow),
    time: '8:00PM',
    numberOfPeople: 4,
    createdAt: Date.now(),
}];

const reviews = [{
    id: '111111',
    reservationId: '12345',
    restaurantId: '123',
    userId: 'PgjNHDAF6DRcolNIf03o4oe4IKF2',
    rating: 4.0,
    // replace the "fb-example-app-2" with the app id you choose during setup. These links won't
    // point to anything until we upload these files to Cloud Storage.
    photoUrls: ['https://storage.googleapis.com/fb-example-app-2.appspot.com/reviewPhotos/hemingways-review-1.jpeg'],
    text: `
        I really like this place. Their take on pot roast is sublime, and
        my mouth is watering right now just thinking about it. The one thing
        I would change is the lighting, it was a little to dark in there
        and I needed to ask the waiter to read several things off the menu
        for me.
    `,
}];

const dateAvailabilities = [{
    id: '888888',
    restaurantId: '123',
    date: dateFormat(twoWeeksFromNow),
    availableTimes: ['6:00PM', '6:30PM', '7:30PM'],
}, {
    id: '888889',
    restaurantId: '123',
    date: dateFormat(twoWeeksOneDayFromNow),
    availableTimes: ['6:00PM', '6:30PM', '7:00PM', '7:30PM', '8:00PM'],
}, {
    id: '888890',
    restaurantId: '123',
    date: dateFormat(twoWeeksTwoDaysFromNow),
    availableTimes: ['7:00PM', '7:30PM', '8:00PM', '8:30PM'],
}, {
    id: '888891',
    restaurantId: '345',
    date: dateFormat(twoWeeksFromNow),
    availableTimes: ['6:00PM', '6:30PM', '7:00PM', '7:30PM'],
}, {
    id: '888892',
    restaurantId: '345',
    date: dateFormat(twoWeeksOneDayFromNow),
    availableTimes: ['6:00PM', '7:00PM', '7:30PM', '8:00PM'],
}, {
    id: '888893',
    restaurantId: '345',
    date: dateFormat(twoWeeksTwoDaysFromNow),
    availableTimes: ['7:00PM', '7:30PM', '8:00PM', '8:30PM', '9:00PM'],
}, {
    id: '888894',
    restaurantId: '678',
    date: dateFormat(twoWeeksFromNow),
    availableTimes: ['6:00PM', '6:30PM', '7:00PM', '7:30PM'],
}, {
    id: '888895',
    restaurantId: '678',
    date: dateFormat(twoWeeksOneDayFromNow),
    availableTimes: ['6:00PM', '6:30PM', '7:00PM', '7:30PM', '8:00PM'],
}, {
    id: '888896',
    restaurantId: '678',
    date: dateFormat(twoWeeksTwoDaysFromNow),
    availableTimes: ['7:00PM', '7:30PM', '8:30PM', '9:00PM'],
}];

const restaurants = [{
    id: '123',
    name: 'Hemingway\'s',
    imageUrl: 'https://storage.googleapis.com/fb-example-app-2.appspot.com/restaurants/hemingways.jpeg',
    rating: 4.0,
    address: {
        street: '123 Someone Street',
        city: 'New York',
        state: 'NY',
        zipCode: '12345',
    },
    tags: ['fancy', 'expensive', 'american', 'mixed drinks'],
    bio: `
        Founded in 1956, Hemingway's is a stylish American restaurant in
        upper Manhattan that specializes in fire-grilled meat and mixed drinks.
        Over the years, it has continued to delight customers with creative new
        dishes.
    `,
}, {
    id: '345',
    name: 'Ben\'s Burgers',
    imageUrl: 'https://storage.googleapis.com/fb-example-app-2.appspot.com/restaurants/bens-burgers.jpeg',
    rating: 3.5,
    address: {
        street: '5 Burger Lane',
        city: 'New York',
        state: 'NY',
        zipCode: '12345',
    },
    bio: `
        All of the toppings, all of the grease! Ben's Burgers
        is hands-down the best burger joint in town.
    `,
    tags: ['burgers', 'greasy', 'family-friendly'], 
},{
    id: '678',
    name: 'Le Mollusc',
    imageUrl: 'https://storage.googleapis.com/fb-example-app-2.appspot.com/restaurants/le-mollusc.jpeg',
    rating: 4.5,
    address: {
        street: '7 Fancy Avenue',
        city: 'New York',
        state: 'NY',
        zipCode: '12345',
    },
    bio: `
        Le mollusc was founded with one goal in mind: to provide the finest,
        freshest seafood anywhere. Since 1988, it has delivered on this goal,
        and has become one of the most celebrated seafood restaurants around.
    `,
    tags: ['seafood', 'french', 'oysters'], 
}];

module.exports = {
    reservations,
    reviews,
    dateAvailabilities,
    restaurants,
};