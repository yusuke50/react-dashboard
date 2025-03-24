import { useState, useRef } from 'react';
import TabDetail from './TabDetail';

const RightContent = () => {
  return (
    <div className='tabs tabs-lift w-full'>
      <TabDetail name='mainTab' label='Dashboard' checked='true' />
      <TabDetail name='mainTab' label='Ultrices' icon='true' />
      <TabDetail name='mainTab' label='Cursus' icon='true' />
    </div>
  );
};

export default RightContent;
