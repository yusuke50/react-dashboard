import TopHeader from './components/TopHeader';
import LeftNav from './components/LeftNav';
import RightContent from './components/RightContent';

const Dashboard = () => {
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

export default Dashboard;
