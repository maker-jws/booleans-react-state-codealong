import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter'
import Counter, {Example} from './components/Counter'

// console.log(Counter)
// Example()

function App() {
  return (
    <div className="App">
        {/* React State Lesson */}
        {/* importing our state management tools, defining state, updating state, and observing state changes in our browser */}
        <h1>Intro to State in React</h1>
        < Counter />
    </div>
  );
}

export default App;
