import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function Layout() {
  const bodyStyle = {
    padding: 20
  }
  return (
    <div>
      <Navigation />
      <div style={bodyStyle}>
        <Outlet />
      </div>    
    </div>
  );
}
