import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

export default function Layout() {
  return (
    <div>
      <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <div className='dropdown'>
          <button className='dropbtn' onClick='myFunction()'>
            Dropdown <FontAwesomeIcon icon={faSortDown} />
          </button>
          <div className='dropdown-content' id='myDropdown'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
