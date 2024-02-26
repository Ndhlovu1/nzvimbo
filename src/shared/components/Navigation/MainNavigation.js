import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import BackDrop from '../UIElements/Backdrop'
import './MainNavigation.css';


const MainNavigation = props => {
  //Utilize the state to verify whether it is open or it is closed
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)


    const openDrawer = () => {
      setDrawerIsOpen(true)
    }

    const closeDrawer = () => {
      setDrawerIsOpen(false)
    }

  return (
    <React.Fragment>

    {/* //If the drawer is open, simply close it with the backdrop */}
    {drawerIsOpen && <BackDrop onClick={closeDrawer}/>}

    { drawerIsOpen ? (
      <SideDrawer>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks/>
        </nav>
      </SideDrawer>) 
      : null
    } 

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">My Places</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks/>
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;