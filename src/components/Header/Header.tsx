import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { Logo } from '../Logo';
import { Nav } from './Nav';
import { HeaderButton } from './HeaderButton';
import { BurgerMenu } from './BurgerMenu';
import { SideNavWrapper } from './SideNav/SideNavWrapper';

const Header: React.FC = () => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  const [isWhite, setIsWhite] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsWhite(true);
    } else {
      setIsWhite(false);
    }
  }, [location]);


  const onBurgerMenuToggle = () => {
    setSideNavIsOpen(!sideNavIsOpen);
  };

  const sidebarClose = () => {
    setSideNavIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-wrapper header-left">
            <Logo colorClass={isWhite ? 'logo_white' : 'logo_black'} />
            <Nav sideNav={false} isWhite={isWhite} />
          </div>
          <HeaderButton isWhite={isWhite} />
          <BurgerMenu isWhite={isWhite} onToggle={onBurgerMenuToggle} />
        </div>
      </div>
      <CSSTransition in={sideNavIsOpen} timeout={200} classNames="sidenav-wrapper" unmountOnExit>
        <SideNavWrapper sidebarClose={sidebarClose} />
      </CSSTransition>
    </header>
  );
};

export default Header;
