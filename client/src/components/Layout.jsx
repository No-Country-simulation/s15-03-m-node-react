
import { Outlet } from 'react-router-dom';

import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';


const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
       <Footer /> 
    </div>
  );
};

export default Layout;
