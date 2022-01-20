import { useState } from 'react';
import { css } from '@emotion/css';
import GuestRoomDialog from './components/GuestRoomDialog';
import { pushState } from './base/pushState';
import { Button } from './components/Button';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

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
        <Button onClick={openDialog}>Open</Button>
      </div>
      <GuestRoomDialog onClose={closeDialog} open={open} onSearch={pushState} />
    </div>
  );
}

export default App;
