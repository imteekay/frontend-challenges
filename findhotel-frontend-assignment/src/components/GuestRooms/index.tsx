import { useContext } from 'react';
import { GuestRoom } from './GuestRoom';
import { GuestRoomsContext } from '../../GuestRooms/contexts/GuestRoomsContext';
import { SearchButton } from './SearchButton';

export const GuestRooms = () => {
  const { getRooms, addRoom, removeRoom } = useContext(GuestRoomsContext);
  const rooms = getRooms();

  const removeRoomOnClick = (room: string) => () => {
    removeRoom(room);
  };

  return (
    <>
      {rooms.map((room, index) => (
        <div key={room}>
          <GuestRoom room={room} />
          {index && (
            <button onClick={removeRoomOnClick(room)}>Remove room</button>
          )}
        </div>
      ))}
      <button onClick={addRoom}>+ Add room</button>
      <SearchButton />
    </>
  );
};
