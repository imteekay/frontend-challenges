import { toGuestRooms } from '../toGuestRooms';

describe('toGuestRooms', () => {
  it('generates GuestRooms based on "1:4,6|3"', () => {
    expect(toGuestRooms('1:4,6|3')).toEqual({
      rooms: {
        'Room 1': {
          adultsCount: 1,
          children: [
            {
              age: 4,
            },
            {
              age: 6,
            },
          ],
        },
        'Room 2': {
          adultsCount: 3,
          children: [],
        },
      },
    });
  });

  it('generates GuestRooms based on "3"', () => {
    expect(toGuestRooms('3')).toEqual({
      rooms: {
        'Room 1': {
          adultsCount: 3,
          children: [],
        },
      },
    });
  });

  it('generates GuestRooms based on "2:4"', () => {
    expect(toGuestRooms('2:4')).toEqual({
      rooms: {
        'Room 1': {
          adultsCount: 2,
          children: [
            {
              age: 4,
            },
          ],
        },
      },
    });
  });

  it('generates GuestRooms based on "1:0,13,16"', () => {
    expect(toGuestRooms('1:0,13,16')).toEqual({
      rooms: {
        'Room 1': {
          adultsCount: 1,
          children: [
            {
              age: 0,
            },
            {
              age: 13,
            },
            {
              age: 16,
            },
          ],
        },
      },
    });
  });
});
