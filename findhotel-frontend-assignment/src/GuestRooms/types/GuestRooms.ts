export type Child = {
  age: number;
};

export type Room = {
  adultsCount: number;
  children: Child[];
};

export type GuestRooms = {
  rooms: {
    [room: string]: Room;
  };
};
