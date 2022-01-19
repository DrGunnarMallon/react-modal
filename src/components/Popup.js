export default function Popup({ showModal, name }) {
  const keyDownHandler = (event) => {
    if (event.key === "Escape") showModal(false);
  };
  document.addEventListener("keydown", keyDownHandler);

  return (
    <div className="popup">
      <div className="modal">
        <button className="close-modal" onClick={() => showModal(false)}>
          &times;
        </button>
        <h1>Cats are awesome!</h1>
        <p>
          Hide when guests come over. Let me in let me out let me in let me out let me in let me out
          who broke this door anyway ptracy litter box is life. Under the bed i am the best but go
          crazy with excitement when plates are clanked together signalling the arrival of cat food
          or i love cats i am one wake up scratch humans leg for food then purr then i have a and
          relax sweet beast, or sleep on keyboard.
        </p>
        <div className="btns">
          <button className="modal-btn" onClick={() => showModal(false)}>
            Agreed
          </button>
        </div>
      </div>
      <div className="overlay" onClick={() => showModal(false)}></div>
    </div>
  );
}
