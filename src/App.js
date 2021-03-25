import './App.css';
import Navbar from './Navbar';
import home from './home';

function App() {
  const title ='hellow people';
  const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar/>
    <div className="content">
      <home></home>
    </div>
    </div>
  );
}

export default App;
