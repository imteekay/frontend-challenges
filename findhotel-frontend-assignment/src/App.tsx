import { useState } from 'react';
import { GuestRoomOverlay } from './components/GuestRoomOverlay';
import { pushState } from './base/pushState';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const openOverlay = () => setOpen(true);
  const closeOverlay = () => setOpen(false);

  return (
    <div className="App">
      <button onClick={openOverlay}>Open</button>
      <GuestRoomOverlay
        onClose={closeOverlay}
        open={open}
        onSearch={pushState}
      />
    </div>
  );
}

export default App;
