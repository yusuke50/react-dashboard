import { Tabs } from 'antd';

const RightContent = ({ tabs, activeKey, onTabChange }) => {
  return (
    <div className='right-content'>
      <div className='tab-area'>
        <Tabs
          type='card'
          items={tabs}
          activeKey={activeKey}
          onChange={onTabChange}
        />
      </div>
    </div>
  );
};

export default RightContent;
