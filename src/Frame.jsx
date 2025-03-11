import { useEffect } from 'react';
import TopHeader from './components/TopHeader';
import LeftNav from './components/LeftNav';
import RightContent from './components/RightContent';

const Frame = () => {
  useEffect(() => {
    window.history.replaceState(null, '', '/');
  });

  return (
    <>
      <TopHeader logout='true' />
      <div className='main-wrapper'>
        <LeftNav />
        <RightContent />
      </div>
    </>
  );
};

export default Frame;
