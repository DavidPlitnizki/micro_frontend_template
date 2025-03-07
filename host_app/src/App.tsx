import useStore from "remoteApp/store";
import Button from "remoteApp/Button";
import "./App.css";

function App() {
  const [count, setCount]: [
    number,
    (value: number | ((prev: number) => number)) => void
  ] = useStore();

  return (
    <div>
      <h1>Host App</h1>
      <div>
        <Button />
        <button onClick={() => setCount((prev) => prev + 1)}>
          Click Me: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
