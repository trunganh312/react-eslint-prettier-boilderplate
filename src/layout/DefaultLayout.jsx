import React from 'react';
import Header from '~/components/Header/Header';
import SideBar from '~/components/SideBar/SideBar';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className='grid wide'>
        <div className='row'>
          <div className='col l-2'>
            <SideBar></SideBar>
          </div>
          <div className='col l-10'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
