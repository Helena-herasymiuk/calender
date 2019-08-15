import React from 'react';

function Header(props) {
  const {
    onPreviousM, month, year, onToday, onNextM,
  } = props;
  return (
    <div className="header">
      <button
        type="button"
        className="header__btn"
        onClick={onPreviousM}
      >
        {' < '}
      </button>
      <p>
        {' '}
        It is :
        {+month + 1}
        .
        {year}
      </p>
      <button
        type="button"
        className="header__btn"
        onClick={onToday}
      >
        Today
      </button>
      <button
        type="button"
        className="header__btn"
        onClick={onNextM}
      >
        {' > '}
      </button>
    </div>
  );
}

export default Header;
