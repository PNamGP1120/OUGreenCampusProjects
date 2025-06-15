import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        {/* Nội dung của các trang sẽ được render ở đây */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;