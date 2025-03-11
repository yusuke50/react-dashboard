import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Logo from './components/Logo';
import LeftNav from './components/LeftNav';
import RightContent from './components/RightContent';

const Frame = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

  useEffect(() => {
    window.history.replaceState(null, '', '/');
  });

  return (
    <>
      <div className='top-header'>
        <div>
          <Logo />
          <div className='right-top-header'>
            <div className='right-corner-icon selector-icon'></div>
            <div
              className='right-corner-icon logout-icon'
              onClick={handleLogout}
            ></div>
          </div>
        </div>
      </div>
      <div className='main-wrapper'>
        <LeftNav />
        <RightContent />
      </div>
    </>
  );
};

export default Frame;
