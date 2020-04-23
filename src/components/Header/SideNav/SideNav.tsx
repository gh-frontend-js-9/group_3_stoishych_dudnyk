import React from 'react';
import { Nav } from '../Nav';
import { HeaderButton } from '../HeaderButton';
import { Logo } from '../../Logo';

export const SideNav = () => (
  <>
    <div className="sidenav">
      <Logo colorClass="logo_black" />
      <Nav sideNav />
      <HeaderButton isWhite={false} />
    </div>
  </>
);
