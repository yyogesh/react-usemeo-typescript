import Counter from './components/Counter';
import { Factorial } from './components/Factorial';
import Fibonacci from './components/Fibonacci';
import { Parent } from './components/Parent';


function App() {
  return (
    <div className="App">
      <Factorial />
      <Fibonacci />
      <Counter />
      <hr />
      <Parent />
    </div>
  );
}

export default App;
