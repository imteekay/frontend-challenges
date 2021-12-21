import { useContext } from 'react';
import { GuestRoom } from './GuestRoom';
import { GuestRoomsContext } from '../../GuestRooms/contexts/GuestRoomsContext';
import { SearchButton } from './SearchButton';
import { Button } from '../Button';

export const GuestRooms = () => {
  const { getRooms, addRoom, removeRoom } = useContext(GuestRoomsContext);
  const rooms = getRooms();

  const removeRoomOnClick = (room: string) => () => {
    removeRoom(room);
  };

  return (
    <div>
      {rooms.map((room, index) => (
        <div key={room}>
          <GuestRoom room={room} />
          {index ? (
            <Button variant="danger" onClick={removeRoomOnClick(room)}>
              Remove room
            </Button>
          ) : null}
        </div>
      ))}
      <Button onClick={addRoom}>+ Add room</Button>
      <SearchButton />
    </div>
  );
};
