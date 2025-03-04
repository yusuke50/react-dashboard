import { useState } from 'react';
import NavLink from './NavLink';

const LeftNav = () => {
  const [menuVisibility, setMenuVisibility] = useState({
    submenu1: false,
    submenu2: false,
    thirdmenu3: false,
  });

  const toggleMenu = (menu) => {
    setMenuVisibility((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className='left-nav'>
      <ul className='menu'>
        <li className='menu-item'>
          <NavLink href='#' icon='fa-solid fa-dog' label='Lorem' />
        </li>
        <li className='menu-item'>
          <NavLink href='#' icon='fa-solid fa-music' label='Ipsum' />
        </li>
        <li className='menu-item'>
          <NavLink
            href='#'
            icon='fa-solid fa-paperclip'
            label='Dolor'
            dropdown='true'
            menuVisibility={menuVisibility.submenu1}
            onClick={() => toggleMenu('submenu1')}
          />
          {menuVisibility.submenu1 && (
            <ul className='submenu'>
              <li className='submenu-item'>
                <NavLink href='#' icon='fa-solid fa-hippo' label='Sit' />
              </li>
              <li className='submenu-item'>
                <NavLink href='#' icon='fa-solid fa-umbrella' label='Amit' />
              </li>
            </ul>
          )}
        </li>
        <li className='menu-item'>
          <NavLink
            href='#'
            icon='fa-solid fa-pen-nib'
            label='Consectetur'
            dropdown='true'
            menuVisibility={menuVisibility.submenu2}
            onClick={() => toggleMenu('submenu2')}
          />
          {menuVisibility.submenu2 && (
            <ul className='submenu'>
              <li className='submenu-item'>
                <NavLink href='#' icon='fa-solid fa-book' label='Adipiscing' />
              </li>
              <li className='submenu-item'>
                <NavLink
                  href='#'
                  icon='fa-solid fa-droplet'
                  label='Elit'
                  dropdown='true'
                  menuVisibility={menuVisibility.thirdmenu3}
                  onClick={() => toggleMenu('thirdmenu3')}
                />
                {menuVisibility.thirdmenu3 && (
                  <ul className='thirdmenu'>
                    <li className='thirdmenu-item'>
                      <NavLink href='#' icon='fa-solid fa-barcode' label='Duis' />
                    </li>
                    <li className='thirdmenu-item'>
                      <NavLink href='#' icon='fa-solid fa-gear' label='Idmi' />
                    </li>
                    <li className='thirdmenu-item'>
                      <NavLink href='#' icon='fa-solid fa-fire' label='Estvi' />
                    </li>
                  </ul>
                )}
              </li>
              <li className='submenu-item'>
                <NavLink href='#' icon='fa-solid fa-city' label='Pellent' />
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
