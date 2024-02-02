import logo from "./logo.svg";
import "./App.css";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";

function App() {
  return (
    <>
      <Counter1 unit={5} />
      <Counter1 unit={10} />
      <Counter1 />
      <Counter2 />
    </>
  );
}

export default App;
