import Popup from "./components/Popup";
import "./stylesheets/App.css";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <button className="show-modal" onClick={() => setShowModal(true)}>
        Cats?
      </button>
      {showModal && <Popup name="sign-up" showModal={setShowModal} />}
    </div>
  );
}

export default App;
