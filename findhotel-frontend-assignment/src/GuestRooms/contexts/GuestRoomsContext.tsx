import { createContext, useState } from 'react';
import { GuestRooms, Room, Child } from '../types/GuestRooms';

type GuestRoomsValues = {
  getAdultsCount: (room: string) => number;
  getChildrenCount: (room: string) => number;
  getChildren: (room: string) => Child[];
  getRooms: () => string[];
  updateAdultsCount: (room: string, count: number) => void;
  updateChild: (room: string, childIndex: number, childAge: number) => void;
  addChild: (room: string) => void;
  removeChild: (room: string) => void;
  addRoom: () => void;
};

export const GuestRoomsContext = createContext<GuestRoomsValues>(undefined);

const ROOMS_DEFAULT = {
  'Room 1': {
    adultsCount: 2,
    children: [],
  },
};

export const GuestRoomsProvider = (props) => {
  const [guestRooms, setGuestRooms] = useState<GuestRooms>({
    rooms: ROOMS_DEFAULT,
  });

  function getAdultsCount(room: string) {
    return guestRooms.rooms[room].adultsCount;
  }

  function getChildrenCount(room: string) {
    return guestRooms.rooms[room].children.length;
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
    getChildren,
    getRooms,
    updateAdultsCount,
    updateChild,
    addChild,
    removeChild,
    addRoom,
  };

  return (
    <GuestRoomsContext.Provider value={providerValue}>
      {props.children}
    </GuestRoomsContext.Provider>
  );
};
