import React from 'react';
import Search from '../Search';

export const HeaderButton = (props: {isWhite: boolean}) => (
  <button className={props.isWhite ? 'header-button header-button_white' : 'header-button'}>
    <Search classes="sidenav__search" isUnderline={false} />
  </button>
);
