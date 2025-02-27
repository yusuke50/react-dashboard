import { useNavigate } from 'react-router';
import Logo from './components/Logo';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <div className='top-header'>
        <div>
          <Logo />
          <div className='right-corner'>
            <div className='right-corner-icon selector-icon'></div>
            <div className='right-corner-icon logout-icon' onClick={handleLogout}></div>
          </div>
        </div>
      </div>

      <div className='main-wrapper'>
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
