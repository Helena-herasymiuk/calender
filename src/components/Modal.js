import React from 'react';

function Modal(props) {
  /* eslint-disable react/prop-types */
  const {
    date, handleKey, inputVal, saveEvent, modalClose,
  } = props;
  return (
    <div className="modal">
      <p>
        Please enter your event for
        {' ' + date}
      </p>
      <label htmlFor="eventAdding">
        Name of event
        <input
          type="text"
          placeholder="event"
          onChange={inputVal}
          onKeyDown={handleKey}
          id="eventAdding"
          autoFocus
        />
      </label>
      <div className="modal__btns">
        <button
          type="button"
          className="modal__btn"
          onClick={saveEvent}
        >
          Save
        </button>
        <button
          type="button"
          className="modal__btn"
          onClick={modalClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;
