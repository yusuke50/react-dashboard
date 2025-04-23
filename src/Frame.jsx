import { act, useEffect, useState } from 'react';
import TopHeader from './components/TopHeader';
import LeftNav from './components/LeftNav';
import RightContent from './components/RightContent';
import Dashboard from './Pages/Dashboard';

const Frame = () => {
  const [tabs, setTabs] = useState([
    { label: 'Dashboard', key: '/dashboard', children: <Dashboard /> },
  ]);
  const [activeKey, setActiveKey] = useState('/dashboard');

  const addTab = (tabObj) => {
    const existingTab = tabs.find((tab) => tab.key == tabObj.key);
    if (existingTab) {
      setActiveKey(tabObj.key);
      return;
    }

    setTabs((prevTabs) => [...prevTabs, tabObj]);
    setActiveKey(tabObj.key);
  };

  const removeTab = (key) => {
    setTabs((prevTabs) => {
      const updatedTabs = prevTabs.filter((tab) => tab.key !== key);

      console.log('🚀 ~ setTabs ~ updatedTabs:', updatedTabs);

      if (activeKey == key) {
        setActiveKey(
          updatedTabs.length > 1
            ? updatedTabs[updatedTabs.length - 1].key
            : '/dashboard'
        );
      }

      if (updatedTabs.length == 1) {
        setActiveKey('/dashboard');
      }
      return updatedTabs;
    });
  };

  const onTabChange = (key) => {
    setActiveKey(key);
  };

  useEffect(() => {
    window.history.replaceState(null, '', '/');
  });

  return (
    <>
      <TopHeader logout='true' />
      <div className='main-wrapper'>
        <LeftNav addTab={addTab} removeTab={removeTab} />
        <RightContent
          tabs={tabs}
          activeKey={activeKey}
          onTabChange={onTabChange}
        />
      </div>
    </>
  );
};

export default Frame;
