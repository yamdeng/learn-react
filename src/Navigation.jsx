import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import menu from './data/menu';

export default function Navigation() {
  const [visibleMenuIndex, setVisibleMenuIndex] = useState(-1);
  const handleDisplayChildrenMenu = function (event, rootMenuIndex) {
    event.stopPropagation();
    setVisibleMenuIndex(rootMenuIndex);
  };
  const navigate = useNavigate();

  const handleMoveRoute = function (event, path) {
    event.stopPropagation();
    event.preventDefault();
    navigate(path);
    setVisibleMenuIndex(-1);
  };

  const handleOuterClick = function (event) {
    event.stopPropagation();
    event.preventDefault();
    setVisibleMenuIndex(-1);
  };

  return (
    <div className='navbar' onClick={event => handleOuterClick(event)}>
      {menu.map((rootMenu, index) => {
        const { title, children } = rootMenu;
        return (
          <div className='dropdown' key={index}>
            <button className='dropbtn' onClick={event => handleDisplayChildrenMenu(event, index)}>
              {title} <FontAwesomeIcon icon={faSortDown} height={2000} />
            </button>
            <div className={visibleMenuIndex === index ? 'dropdown-content show' : 'dropdown-content'}>
              {children.map((linkMenuInfo, linkIndex) => {
                const { title: linkTitle, path } = linkMenuInfo;
                return (
                  <a href={path} key={linkIndex} onClick={event => handleMoveRoute(event, path)}>
                    {linkTitle}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
