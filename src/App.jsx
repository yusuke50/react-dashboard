import { useNavigate } from 'react-router';
import './index.css';
import './App.scss';
import Logo from './components/Logo';
import DescriptionItem from './components/DescriptionItem';
import GaugeIcon from './components/GaugeIcon';
import ChartIcon from './components/ChartIcon';
import SystemIcon from './components/SystemIcon';
import LoginForm from './components/LoginForm';

function App() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/dashboard');
  };
  return (
    <>
      <div className='top-header'>
        <div>
          <Logo />
          <div className='right-top-header'>
            <div className='selector-icon'></div>
          </div>
        </div>
      </div>
      <div className='login-form'>
        <div className='logo-area'>
          <Logo />
        </div>
        <div className='form-main'>
          <div className='left-description'>
            <div className='left-intro'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
              purus eu nibh porttitor semper.
            </div>
            <div className='sub-description'>
              <DescriptionItem
                icon={GaugeIcon}
                title='Praesent sapien leo'
                content='Nulla facilisi. Ut porta augue eu tortor auctor elementum. Donec ullamcorper dictum sapien eu tempus.'
              />
              <DescriptionItem
                icon={ChartIcon}
                title='Mauris vehicula urna velit'
                content='Proin placerat nunc eu augue elementum, semper auctor risus maximus. Vivamus ullamcorper faucibus arcu eu consectetur.'
              />
              <DescriptionItem
                icon={SystemIcon}
                title='Sed enim orci'
                content='Sed a magna in ex semper blandit et vitae justo. Sed eleifend ultricies nulla a aliquet. Fusce eleifend, nunc ut pharetra.'
              />
            </div>
          </div>

          <LoginForm onSuccess={handleLoginSuccess} />
        </div>
      </div>
    </>
  );
}

export default App;
