import { useState } from 'react';
import { css } from '@emotion/css';
import { GuestRoomOverlay } from './components/GuestRoomOverlay';
import { pushState } from './base/pushState';
import { Button } from './components/Button';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const openOverlay = () => setOpen(true);
  const closeOverlay = () => setOpen(false);

  return (
    <div className="App">
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
        `}
      >
        <Button onClick={openOverlay}>Open</Button>
      </div>
      <GuestRoomOverlay
        onClose={closeOverlay}
        open={open}
        onSearch={pushState}
      />
    </div>
  );
}

export default App;
