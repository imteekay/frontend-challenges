import {
  getAdultsCount,
  getChildrenCount,
  getGuestsCount,
  getChildren,
  getRooms,
} from '../getters';

const children1 = [
  {
    age: 4,
  },
  {
    age: 6,
  },
];

const children2 = [];

const rooms = [
  {
    adultsCount: 1,
    children: children1,
  },
  {
    adultsCount: 3,
    children: children2,
  },
];

const guestRooms = {
  rooms,
};

describe('getAdultsCount', () => {
  it('returns the number of adults for each room', () => {
    expect(getAdultsCount(guestRooms, 0)).toEqual(1);
    expect(getAdultsCount(guestRooms, 1)).toEqual(3);
  });
});

describe('getChildrenCount', () => {
  it('returns the number of children for each room', () => {
    expect(getChildrenCount(guestRooms, 0)).toEqual(2);
    expect(getChildrenCount(guestRooms, 1)).toEqual(0);
  });
});

describe('getGuestsCount', () => {
  it('returns the number of guests', () => {
    expect(getGuestsCount(guestRooms)).toEqual(6);
  });
});

describe('getChildren', () => {
  it('returns the children for each room', () => {
    expect(getChildren(guestRooms, 0)).toEqual(children1);
    expect(getChildren(guestRooms, 1)).toEqual(children2);
  });
});

describe('getRooms', () => {
  it('returns all rooms', () => {
    expect(getRooms(guestRooms)).toEqual(rooms);
  });
});
