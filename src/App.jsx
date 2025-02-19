import './App.scss';
import Logo from './components/Logo';
import DescriptionItem from './components/DescriptionItem';
import GaugeIcon from './components/GaugeIcon';
import ChartIcon from './components/ChartIcon';
import SystemIcon from './components/SystemIcon';
import InputItem from './components/InputItem';
import CheckboxItem from './components/CheckboxItem';

function App() {
  return (
    <>
      <div className='top-header'>
        <div>
          <div className='logo-area'>
            <Logo />
          </div>
          <div className='right-selector'>
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
          <div className='right-form'>
            <h3 className='form-title'>Login</h3>
            <div className='form-area'>
              <form>
                <InputItem type='text' placeholder='username' />
                <InputItem type='password' placeholder='password' />
                <CheckboxItem
                  value='remember'
                  id='rememberMe'
                  for='rememberMe'
                  label='Remember Me'
                />
                <CheckboxItem
                  value='security'
                  id='secureLogin'
                  for='secureLogin'
                  label='Secure Login'
                />
              </form>
            </div>
            <div className='login-button'>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
