import Popup from "./components/Popup";
import "./stylesheets/App.css";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <button className="show-modal" onClick={() => setShowModal(true)}>
        Cats are ...
      </button>
      {showModal && <Popup showModal={setShowModal} blurred={true} />}
    </div>
  );
}

export default App;
