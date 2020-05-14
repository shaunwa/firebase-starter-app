export const fakeReservations = [{
    id: '959595',
    restaurant: {
        id: '123',
        name: 'Hemingway\'s',
        imageUrl: 'someimg.com',
        address: {
            street: '123 Someone Street',
            city: 'New York',
            state: 'NY',
            zipCode: '12345',
        },
        tags: ['fancy', 'expensive', 'american', 'mixed drinks'],
    },
    date: 'March 20, 2020',
    time: '6:30PM',
    numberOfPeople: 2,
    confirmed: true,
    createdAt: Date.now(),
}, {
    id: '949494',
    restaurant: {
        id: '234',
        name: 'Le Mollusc',
        imageUrl: 'someimg.com',
        address: {
            street: '123 Someone Street',
            city: 'New York',
            state: 'NY',
            zipCode: '12345',
        },
        tags: ['seafood', 'french', 'oysters'],
    },
    date: 'March 10, 2020',
    time: '8:00PM',
    numberOfPeople: 2,
    confirmed: false,
    createdAt: Date.now() + 8.64e7,
}, {
    id: '939393',
    restaurant: {
        id: '345',
        name: 'Ben\'s Burgers',
        imageUrl: 'someimg.com',
        rating: 3.5,
        address: {
            street: '5 Burger Lane',
            city: 'New York',
            state: 'NY',
            zipCode: '12345',
        },
        tags: ['burgers', 'greasy', 'family-friendly'], 
    },
    date: 'March 15, 2020',
    time: '7:00PM',
    numberOfPeople: 2,
    confirmed: true,
    createdAt: Date.now() + 4.32e7,
}];

export const fakeRestaurants = [{
    id: '123',
    name: 'Hemingway\'s',
    imageUrl: 'someimg.com',
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
        dishes, such as the "Snows of Kilimanjaro" - a large pork rib glazed in a
        garlic-cream sauce.
    `,
    reviews: [{
        id: '1111',
        author: 'James S. Johnson',
        rating: 4,
        text: `
            I really like this place. Their take on pot roast is sublime, and
            my mouth is watering right now just thinking about it. The one thing
            I would change is the lighting, it was a little to dark in there
            and I needed to ask the waiter to read several things off the menu
            for me.
        `,
    }]
}, {
    id: '345',
    name: 'Ben\'s Burgers',
    imageUrl: 'someimg.com',
    rating: 3.5,
    address: {
        street: '5 Burger Lane',
        city: 'New York',
        state: 'NY',
        zipCode: '12345',
    },
    tags: ['burgers', 'greasy', 'family-friendly'], 
},{
    id: '678',
    name: 'Le Mollusc',
    imageUrl: 'someimg.com',
    rating: 4.5,
    address: {
        street: '123 Someone Street',
        city: 'New York',
        state: 'NY',
        zipCode: '12345',
    },
    tags: ['seafood', 'french', 'oysters'], 
}];