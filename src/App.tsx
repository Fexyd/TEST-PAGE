import "./App.css";
import YO from "./assets/yo.jpeg";
import Button from "./components/button";

function App() {
  return (
    <>
      <img src={YO} alt="" />
      <h1>Soy yo</h1>
      <Button></Button>
    </>
  );
}

export default App;
