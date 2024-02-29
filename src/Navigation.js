import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import menu from './data/menu';

// 1.show/hide, 메뉴 보이고 않보이게끔 처리

export default function Navigation() {
  const [visibleMenuIndex, setVisibleMenuIndex] = useState(-1);
  const handleDisplayChildrenMenu = function (event, rootMenuIndex) {
    event.stopPropagation();
    setVisibleMenuIndex(rootMenuIndex);
  };
  return (
    <div className='navbar'>
      {menu.map((rootMenu, index) => {
        const { title, children } = rootMenu;
        return (
          <div className='dropdown' key={index}>
            <button className='dropbtn' onClick={event => handleDisplayChildrenMenu(event, index)}>
              {title} <FontAwesomeIcon icon={faSortDown} height={2000} />
            </button>
            <div className={visibleMenuIndex === index ? 'dropdown-content show' : 'dropdown-content'}>
              {children.map((linkMenuInfo, linkIndex) => {
                const { title: linkTitle } = linkMenuInfo;
                return (
                  <Link to='/' key={linkIndex}>
                    {linkTitle}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
