import './App.css';

function App() {
  const title ='hellow people';
  const link = "http://www.google.com";
  return (
    <div className="App">
    <div className="content">
      <h1>{title}</h1>
     <a href ={link}>google</a>
    </div>
    </div>
  );
}

export default App;
