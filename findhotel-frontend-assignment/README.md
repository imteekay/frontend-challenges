# FindHotel Front-end Engineer Assignment

Thanks for applying for the Front-end Engineer position at FindHotel!

You can find the instructions [here](INSTRUCTIONS.md)

## The sample project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Documentation

Data structures

```typescript
type Child = {
  age: number;
};

type Room = {
  [room: string]: {
    adultsCount: number;
    children: Child[];
  };
};

type GuestRooms = {
  rooms: Room;
};
```

Example:

```typescript
const GuestRooms = {
  rooms: {
    room1: {
      adultsCount: 2,
      children: [
        {
          age: 4,
        },
      ],
    },
    room2: {
      adultsCount: 2,
      children: [
        {
          age: 4,
        },
        {
          age: 10,
        },
      ],
    },
  },
};
```