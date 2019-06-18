import React from 'react';

function Modal(props) {
  return (
    <div className="modal">
       <p>Please enter your event for {props.date}.{+props.month+1}</p>
        <label>
        	Name of event
       	 <input type='text' placeholder='event'
       	 				onChange={props.inputVal}
                onKeyDown={props.handleKey}
                autoFocus>
         </input>
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
