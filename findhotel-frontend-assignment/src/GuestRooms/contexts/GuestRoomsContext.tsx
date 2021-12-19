import { createContext, useState } from 'react';
import { GuestRooms, Child } from '../types/GuestRooms';
import { toGuestRooms } from '../transformers/toGuestRooms';

type GuestRoomsValues = {
  getAdultsCount: (room: string) => number;
  getChildrenCount: (room: string) => number;
  getGuestsCount: () => number;
  getChildren: (room: string) => Child[];
  getRooms: () => string[];
  updateAdultsCount: (room: string, count: number) => void;
  updateChild: (room: string, childIndex: number, childAge: number) => void;
  addChild: (room: string) => void;
  removeChild: (room: string) => void;
  addRoom: () => void;
  guestRooms: GuestRooms;
};

export const GuestRoomsContext = createContext<GuestRoomsValues>(undefined);

const GUEST_ROOMS_DEFAULT = {
  rooms: {
    'Room 1': {
      adultsCount: 2,
      children: [],
    },
  },
};

export const GuestRoomsProvider = ({ children, guestRoomsString }) => {
  const defaultGuestRooms = guestRoomsString
    ? toGuestRooms(guestRoomsString)
    : GUEST_ROOMS_DEFAULT;

  const [guestRooms, setGuestRooms] = useState<GuestRooms>(defaultGuestRooms);

  function getAdultsCount(room: string) {
    return guestRooms.rooms[room].adultsCount;
  }

  function getChildrenCount(room: string) {
    return guestRooms.rooms[room].children.length;
  }

  function getGuestsCount() {
    return Object.values(guestRooms.rooms).reduce(
      (guestsCount, room) =>
        guestsCount + room.adultsCount + room.children.length,
      0
    );
  }

  function getChildren(room: string) {
    return guestRooms.rooms[room].children;
  }

  function getRooms() {
    return Object.keys(guestRooms.rooms);
  }

  function updateAdultsCount(room: string, count: number) {
    setGuestRooms({
      rooms: {
        ...guestRooms.rooms,
        [room]: {
          ...guestRooms.rooms[room],
          adultsCount: count,
        },
      },
    });
  }

  function updateChild(room: string, childIndex: number, childAge: number) {
    const children = guestRooms.rooms[room].children;

    children[childIndex] = {
      age: childAge,
    };

    setGuestRooms({
      rooms: {
        ...guestRooms.rooms,
        [room]: {
          ...guestRooms.rooms[room],
          children,
        },
      },
    });
  }

  function addChild(room: string) {
    const children = guestRooms.rooms[room].children;

    setGuestRooms({
      rooms: {
        ...guestRooms.rooms,
        [room]: {
          ...guestRooms.rooms[room],
          children: [
            ...children,
            {
              age: 8,
            },
          ],
        },
      },
    });
  }

  function removeChild(room: string) {
    const children = guestRooms.rooms[room].children;

    children.pop();

    setGuestRooms({
      rooms: {
        ...guestRooms.rooms,
        [room]: {
          ...guestRooms.rooms[room],
          children,
        },
      },
    });
  }

  function addRoom() {
    setGuestRooms({
      rooms: {
        ...guestRooms.rooms,
        [`Room ${Object.keys(guestRooms.rooms).length + 1}`]: {
          adultsCount: 2,
          children: [],
        },
      },
    });
  }

  const providerValue = {
    getAdultsCount,
    getChildrenCount,
    getGuestsCount,
    getChildren,
    getRooms,
    updateAdultsCount,
    updateChild,
    addChild,
    removeChild,
    addRoom,
    guestRooms,
  };

  return (
    <GuestRoomsContext.Provider value={providerValue}>
      {children}
    </GuestRoomsContext.Provider>
  );
};
