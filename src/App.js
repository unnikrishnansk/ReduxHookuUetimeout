
import './App.css';
import useTimeout from './Hooks/useTimeout';


function App() {

  const ready = useTimeout();
  const ready1 = useTimeout();
 

  return (
    <div className="App">
     <h3>SetTimout</h3>
     <div>
      <div>
      {ready ? "Ready" : "Not Ready"}
      </div>
      <div>
      {ready1 ? "This is also Ready" : "Not Ready"}
      </div>
     </div>
    </div>
  );
}

export default App;
