import { GuestRooms } from './components/GuestRooms';
import { GuestRoomsProvider } from './GuestRooms/contexts/GuestRoomsContext';

import './App.css';

function App() {
  return (
    <div className="App">
      <GuestRoomsProvider>
        <GuestRooms />
      </GuestRoomsProvider>
    </div>
  );
}

export default App;
