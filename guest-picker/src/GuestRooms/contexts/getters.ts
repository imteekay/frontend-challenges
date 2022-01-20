import { GuestRooms } from '../types/GuestRooms';

export function getAdultsCount(guestRooms: GuestRooms, roomIndex: number) {
  return guestRooms.rooms[roomIndex].adultsCount;
}

export function getChildrenCount(guestRooms: GuestRooms, roomIndex: number) {
  return guestRooms.rooms[roomIndex].children.length;
}

export function getGuestsCount(guestRooms: GuestRooms) {
  return guestRooms.rooms.reduce(
    (guestsCount, room) =>
      guestsCount + room.adultsCount + room.children.length,
    0
  );
}

export function getChildren(guestRooms: GuestRooms, roomIndex: number) {
  return guestRooms.rooms[roomIndex].children;
}

export function getRooms(guestRooms: GuestRooms) {
  return guestRooms.rooms;
}
