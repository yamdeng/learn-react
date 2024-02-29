import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <a href='#home'>Home</a>
        <a href='#news'>News</a>
        <div className='dropdown'>
          <button className='dropbtn' onClick='myFunction()'>
            Dropdown <FontAwesomeIcon icon={faSortDown} />
          </button>
          <div className='dropdown-content' id='myDropdown'>
            <a href='void(0)'>Link 1</a>
            <a href='void(0)'>Link 2</a>
            <a href='void(0)'>Link 3</a>
          </div>
        </div>
      </div>
      <div>
        <Button variant='contained'>Hello world</Button>
      </div>
    </div>
  );
}

export default App;
