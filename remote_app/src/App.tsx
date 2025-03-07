import "./App.css";
import Button from "./components/Button";
import useCount from "./store/store";

function App() {
  const [count, setCount] = useCount();

  return (
    <div>
      <h1>Remote App</h1>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Click Me: {count}
        </button>

        <Button />
      </div>
    </div>
  );
}

export default App;
