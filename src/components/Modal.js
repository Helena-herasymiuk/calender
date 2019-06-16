import React from 'react';

function Modal(props) {
  return (
    <div className="modal">
       <p>Please enter your event</p>
        <label>
        	Name of event
       	 <input type='text' placeholder='event'
       	 				onChange={props.inputVal}></input>
        </label>
	    <div className='modal__btns'>
        <button className="modal__btn"
        				onClick={props.saveEvent}>
        	Save
        </button>
         <button className="modal__btn"
         				 onClick={props.modalClose}>
        	Cancel
        </button>
	    </div>
    </div>
  );
}

export default Modal;
