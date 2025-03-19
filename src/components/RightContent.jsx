import { useState, useRef } from 'react';
import { Tabs } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import Dashboard from '../Pages/Dashboard';
import Ultrices from '../Pages/Ultrices';
import Cursus from '../Pages/Cursus';

library.add(fas, faTwitter, faFontAwesome);

const RightContent = () => {
  const items = [
    {
      label: 'Dashboard',
      key: '/dashboard',
      icon: <FontAwesomeIcon icon='fa-solid fa-xmark' fixedWidth />,
      children: <Dashboard />,
    },
    {
      label: 'Ultrices',
      key: '/ultrices',
      icon: <FontAwesomeIcon icon='fa-solid fa-xmark' fixedWidth />,
      children: <Ultrices />,
    },
    {
      label: 'Cursus',
      key: '/cursus',
      icon: <FontAwesomeIcon icon='fa-solid fa-xmark' fixedWidth />,
      children: <Cursus />,
    },
  ];

  return (
    <div className='right-content'>
      <div className='tab-area'>
        <Tabs type='card' items={items} />
      </div>
    </div>
  );
};

export default RightContent;
