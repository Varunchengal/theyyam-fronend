
import './App.css';
import BottomIcons from './components/BottomIcons';
import BottomNav from './components/BottomNav';
import Homefeed from './components/Homefeed';

function App() {
  return (
    <div className="App container-fluid">
      <Homefeed/>
      <BottomNav/>
    </div>
  );
}

export default App;
