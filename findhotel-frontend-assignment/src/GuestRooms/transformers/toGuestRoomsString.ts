import { GuestRooms, Child, Room } from '../types/GuestRooms';

const ROOM_SEPARATOR = '|';
const ADULT_CHILDREN_SEPARATOR = ':';
const CHILDREN_SEPARATOR = ',';

function toChildrenAgesString(children: Child[]) {
  return children.map(({ age }) => age).join(CHILDREN_SEPARATOR);
}

function toAdultsAndChildrenAgesString({ adultsCount, children }: Room) {
  const childrenAges = toChildrenAgesString(children);

  return childrenAges
    ? adultsCount + ADULT_CHILDREN_SEPARATOR + childrenAges
    : adultsCount;
}

export function toGuestRoomsString(guestRooms: GuestRooms) {
  return guestRooms.rooms
    .map(toAdultsAndChildrenAgesString)
    .join(ROOM_SEPARATOR);
}
