import { createContext, useState } from 'react';
import { GuestRooms, Room, Child } from '../types/GuestRooms';
import { toGuestRooms } from '../transformers/toGuestRooms';

type GuestRoomsValues = {
  getAdultsCount: (roomIndex: number) => number;
  getChildrenCount: (roomIndex: number) => number;
  getGuestsCount: () => number;
  getChildren: (roomIndex: number) => Child[];
  getRooms: () => Room[];
  updateAdultsCount: (roomIndex: number, count: number) => void;
  updateChild: (
    roomIndex: number,
    childIndex: number,
    childAge: number
  ) => void;
  addChild: (roomIndex: number) => void;
  removeChild: (roomIndex: number, childIndex?: number) => void;
  addRoom: () => void;
  removeRoom: (roomIndex: number) => void;
  guestRooms: GuestRooms;
};

export const GuestRoomsContext = createContext<GuestRoomsValues>(undefined);

const GUEST_ROOMS_DEFAULT = {
  rooms: [
    {
      adultsCount: 2,
      children: [],
    },
  ],
};

export const GuestRoomsProvider = ({ children, guestRoomsString }) => {
  const defaultGuestRooms = guestRoomsString
    ? toGuestRooms(guestRoomsString)
    : GUEST_ROOMS_DEFAULT;

  const [guestRooms, setGuestRooms] = useState<GuestRooms>(defaultGuestRooms);

  function getAdultsCount(roomIndex: number) {
    return guestRooms.rooms[roomIndex].adultsCount;
  }

  function getChildrenCount(roomIndex: number) {
    return guestRooms.rooms[roomIndex].children.length;
  }

  function getGuestsCount() {
    return guestRooms.rooms.reduce(
      (guestsCount, room) =>
        guestsCount + room.adultsCount + room.children.length,
      0
    );
  }

  function getChildren(roomIndex: number) {
    return guestRooms.rooms[roomIndex].children;
  }

  function getRooms() {
    return guestRooms.rooms;
  }

  function updateAdultsCount(roomIndex: number, count: number) {
    guestRooms.rooms[roomIndex] = {
      ...guestRooms.rooms[roomIndex],
      adultsCount: count,
    };

    setGuestRooms({
      rooms: guestRooms.rooms,
    });
  }

  function updateChild(
    roomIndex: number,
    childIndex: number,
    childAge: number
  ) {
    const children = guestRooms.rooms[roomIndex].children;

    children[childIndex] = {
      age: childAge,
    };

    guestRooms.rooms[roomIndex] = {
      ...guestRooms.rooms[roomIndex],
      children,
    };

    setGuestRooms({
      rooms: guestRooms.rooms,
    });
  }

  function addChild(roomIndex: number) {
    const children = guestRooms.rooms[roomIndex].children;

    children.push({
      ...children,
      age: 8,
    });

    setGuestRooms({
      rooms: guestRooms.rooms,
    });
  }

  function removeChild(roomIndex: number, childIndex: number = -1) {
    const children = guestRooms.rooms[roomIndex].children;

    children.splice(childIndex, 1);

    setGuestRooms({
      rooms: guestRooms.rooms,
    });
  }

  function addRoom() {
    setGuestRooms({
      rooms: [
        ...guestRooms.rooms,
        {
          adultsCount: 2,
          children: [],
        },
      ],
    });
  }

  function removeRoom(roomIndex: number) {
    guestRooms.rooms.splice(roomIndex, 1);

    setGuestRooms({
      rooms: guestRooms.rooms,
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
    removeRoom,
    guestRooms,
  };

  return (
    <GuestRoomsContext.Provider value={providerValue}>
      {children}
    </GuestRoomsContext.Provider>
  );
};
