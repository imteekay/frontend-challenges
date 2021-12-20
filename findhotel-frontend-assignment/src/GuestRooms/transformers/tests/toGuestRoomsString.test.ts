import { toGuestRoomsString } from '../toGuestRoomsString';

describe('toGuestRoomsString', () => {
  it('generates "1:4,6|3"', () => {
    expect(
      toGuestRoomsString({
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
      })
    ).toEqual('1:4,6|3');
  });

  it('generates "3"', () => {
    expect(
      toGuestRoomsString({
        rooms: {
          'Room 1': {
            adultsCount: 3,
            children: [],
          },
        },
      })
    ).toEqual('3');
  });

  it('generates "2:4"', () => {
    expect(
      toGuestRoomsString({
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
      })
    ).toEqual('2:4');
  });

  it('generates "1:0,13,16"', () => {
    expect(
      toGuestRoomsString({
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
      })
    ).toEqual('1:0,13,16');
  });
});
