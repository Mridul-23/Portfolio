import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import useDynamicTitle from '../hooks/useDynamicTitle.js';

function Wrapper() {
  useDynamicTitle("ANIVERSE");
  return (
      <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
  )
}

export default Wrapper