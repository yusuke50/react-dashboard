import { useState } from 'react';
import { useNavigate } from 'react-router';
import Logo from './Logo';
import MultipleLanguages from './MultipleLanguages';

type Props = {
  logout?: string;
};

const TopHeader = ({ logout }: Props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

  const [isMultipleLanguagesVisible, setMultipleLanguagesVisible] = useState(false);

  const toggleMultipleLanguages = () => {
    setMultipleLanguagesVisible(!isMultipleLanguagesVisible);
  };

  return (
    <div className='top-header'>
      <div className='header-wrapper'>
        <Logo />
        <div className='right-top-header'>
          <button
            type='button'
            aria-label='Multiple Languages'
            className='right-corner-icon selector-icon'
            onClick={toggleMultipleLanguages}
          ></button>
          {isMultipleLanguagesVisible && <MultipleLanguages />}
          {logout && <div className='right-corner-icon logout-icon' onClick={handleLogout}></div>}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
