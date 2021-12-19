import { useContext } from 'react';
import { GuestRoom } from './GuestRoom';
import { GuestRoomsContext } from '../../GuestRooms/contexts/GuestRoomsContext';

export const GuestRooms = () => {
  const { getRooms, addRoom } = useContext(GuestRoomsContext);
  const rooms = getRooms();

  return (
    <>
      {rooms.map((room) => (
        <GuestRoom room={room} />
      ))}
      <button onClick={addRoom}>+ Add room</button>
    </>
  );
};
