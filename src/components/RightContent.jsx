import { useState, useRef } from 'react';
import { Tabs } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
library.add(fas, faTwitter, faFontAwesome);

const RightContent = () => {
  const items = [
    {
      label: 'Dashboard',
      key: 1,
      icon: <FontAwesomeIcon icon='fa-solid fa-xmark' fixedWidth />,
      children: 'Tab 1 content',
    },
    {
      label: 'Tab 2',
      key: 2,
      icon: <FontAwesomeIcon icon='fa-solid fa-xmark' fixedWidth />,
      children: 'Tab 2 content',
    },
    {
      label: 'Tab 3',
      key: 3,
      icon: <FontAwesomeIcon icon='fa-solid fa-xmark' fixedWidth />,
      children: 'Tab 3 content',
    },
  ];

  return (
    <div className='right-content'>
      <div className='tab-area'>
        <Tabs type='card' items={items} />
      </div>
      <div className='content-area'></div>
    </div>
  );
};

export default RightContent;
