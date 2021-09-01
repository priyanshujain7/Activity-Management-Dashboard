import Login from "./pages/Login";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <Button background="light"></Button>
      <Input label="Email" id="email"></Input>
    </div>
  );
}

export default App;