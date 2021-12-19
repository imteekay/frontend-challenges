export type Child = {
  age: number;
};

type Room = {
  [room: string]: {
    adultsCount: number;
    children: Child[];
  };
};

export type GuestRooms = {
  rooms: Room;
};
