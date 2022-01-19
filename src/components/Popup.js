import { useEffect } from "react";

export default function Popup(props) {
  const closeModal = (event) => document.querySelector(`.${props.name}`).classList.add("hidden");

  const keyDownHandler = (event) => {
    if (event.key === "Escape") closeModal(null);
  };
  document.addEventListener("keydown", keyDownHandler);

  return (
    <div className={`popup hidden ${props.name}`}>
      <div className="modal">
        <button className="close-modal" onClick={closeModal}>
          &times;
        </button>
        <h1>Hi, I am a popup</h1>
        <p>
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah
        </p>
      </div>
      <div className="overlay" onClick={closeModal}></div>
    </div>
  );
}
