import './App.css';
import { GuestRoomOverlay } from './components/GuestRoomOverlay';

function App() {
  return (
    <div className="App">
      <GuestRoomOverlay onClose={() => console.log('closing')} />
    </div>
  );
}

export default App;
