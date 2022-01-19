import Popup from "./components/Popup";
import "./stylesheets/App.css";

function App() {
  const showPopup = (name) => {
    document.querySelector(name).classList.remove("hidden");
  };

  return (
    <div className="App">
      <button className="show-modal" onClick={showPopup.bind(this, ".sign-up")}>
        Sign-up
      </button>
      <Popup name="sign-up" />
    </div>
  );
}

export default App;
