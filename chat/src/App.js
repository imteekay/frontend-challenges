import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chat } from './chat';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
