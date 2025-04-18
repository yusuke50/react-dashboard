import { useState, useEffect } from 'react';
import TabDetail from './TabDetail';

const RightContent = ({ activeTabs, setActiveTabs }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  const closeTab = (tabToClose) => {
    setActiveTabs((prevTabs) => {
      const tabs = prevTabs.filter((tab) => tab !== tabToClose);
      return tabs;
    });
  };

  useEffect(() => {
    if (!activeTabs.includes(activeTab)) {
      if (activeTabs.length > 0) {
        setActiveTab(activeTabs[activeTabs.length - 1]);
      }
    }
  }, [activeTabs]);

  return (
    <div className='tabs tabs-lift w-full'>
      {Array.isArray(activeTabs) &&
        activeTabs.map((tab) => (
          <TabDetail
            key={tab}
            name='mainTab'
            label={tab}
            checked={tab === activeTab}
            icon={tab != 'Dashboard'}
            onClose={() => closeTab(tab)}
            onClick={handleTabClick}
          />
        ))}
    </div>
  );
};

export default RightContent;
