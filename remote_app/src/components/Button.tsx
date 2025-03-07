import useCount from "../store/store";

const Button = () => {
  const [state, setState] = useCount();
  return (
    <div>
      <button onClick={() => setState((prev) => prev + 1)}>
        State: {state}
      </button>
    </div>
  );
};
export default Button;
