import React from 'react';

function Header(props) {
  return (
    <div className="header">
    	<button className="header__btn"
    					onClick={props.onPreviousM}>
    		{" < "}
    	</button>
    	<p> It is : {+props.month+1}.{props.year}</p>
    	<button className="header__btn"
    					onClick={props.onToday}>
    		Today
    	</button>
    	<button className="header__btn"
    					onClick={props.onNextM}>
    		{" > "}
    	</button>
    </div>
  );
}

export default Header;
