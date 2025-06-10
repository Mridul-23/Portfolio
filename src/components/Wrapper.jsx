import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import useDynamicTitle from '../hooks/useDynamicTitle.js';
import DefaultHelmet from './DefaultHelmet';

function Wrapper() {
  useDynamicTitle("Mridul Narula | Developer Portfolio");
  return (
    <>
      <DefaultHelmet />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Wrapper;
