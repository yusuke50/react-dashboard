import { useEffect, useState } from 'react';
import TopHeader from './components/TopHeader';
import LeftNav from './components/LeftNav';
import RightContent from './components/RightContent';

const Frame = () => {
  const [activeTabs, setActiveTabs] = useState(['Dashboard']);

  const addTab = (item) => {
    if (!activeTabs.includes(item)) {
      setActiveTabs((prevTabs) => [...prevTabs, item]);
    }
  };

  useEffect(() => {
    window.history.replaceState(null, '', '/');
  });

  return (
    <>
      <TopHeader logout='true' />
      <div className='main-wrapper'>
        <LeftNav addTab={addTab} />
        <RightContent activeTabs={activeTabs} setActiveTabs={setActiveTabs} />
      </div>
    </>
  );
};

export default Frame;
