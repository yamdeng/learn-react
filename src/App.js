import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import NotMatch from './components/NotMatch';

function App() {
  useEffect(() => {
    //
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
