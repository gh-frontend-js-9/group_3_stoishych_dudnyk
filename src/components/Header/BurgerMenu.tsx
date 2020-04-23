import React from 'react';

export const BurgerMenu = (props: {onToggle: () => void; isWhite: boolean}) => (
  <div className={props.isWhite ? 'burger-menu burger-menu_white' : 'burger-menu'} onClick={() => props.onToggle()}>
    <div className="burger-menu__line" />
    <div className="burger-menu__line" />
    <div className="burger-menu__line" />
  </div>
);
