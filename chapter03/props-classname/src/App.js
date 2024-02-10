import "./App.css";
import BoxClass from "./components/BoxClass";
import BoxFunction from "./components/BoxFunction";

function App() {
  const profile = { name: "안용성", email: "yamdeng@gmail.com", age: 40 };
  return (
    <div>
      <BoxClass bg="bg-blue" profile={profile} />
      <BoxFunction bg="bg-yellow" />
    </div>
  );
}

export default App;
