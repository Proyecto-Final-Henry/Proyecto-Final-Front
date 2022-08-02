import './App.css';
import Nav from './components/nav/nav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Nav/>
      </div>
    </BrowserRouter>
  );
}

export default App;
