import './App.scss';
import Logo from './components/Logo';
import GaugeIcon from './components/GaugeIcon';
import ChartIcon from './components/ChartIcon';
import SystemIcon from './components/SystemIcon';

function App() {
  return (
    <>
      <div className='top-header'>
        <div className='logo-area'>
          <Logo />
        </div>
        <div className='right-selector'>
          <div className='selector-icon'></div>
        </div>
      </div>
      <div className='login-form'>
        <div className='logo-area'>
          <Logo />
        </div>
        <div className='form-area'>
          <div className='left-description'>
            <p className='text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
              purus eu nibh porttitor semper. Quisque eget orci quis sem
              tristique condimentum. Donec non ex ac magna condimentum eleifend.
              Etiam porta nisl vitae ex rutrum cursus. Aliquam vel magna ac
              augue convallis elementum. Nunc placerat vulputate nisl, eu cursus
              sapien tincidunt vel.
            </p>
            <div className='sub-description'>
              <div className='desc'>
                <div className='desc-icon'>
                  <GaugeIcon />
                </div>
                <div className='desc-content text-left'>
                  Praesent sapien leo, pellentesque sit amet consectetur sit
                  amet, mattis vel risus. Nulla facilisi. Ut porta augue eu
                  tortor auctor elementum. Donec ullamcorper dictum sapien eu
                  tempus. Vivamus eget varius mauris, non maximus dolor.
                </div>
              </div>
              <div className='desc'>
                <div className='desc-icon'>
                  <ChartIcon />
                </div>
                <div className='desc-content text-left'>
                  Mauris vehicula urna velit. Proin placerat nunc eu augue
                  elementum, semper auctor risus maximus. Vivamus ullamcorper
                  faucibus arcu eu consectetur. Morbi a porttitor mi. Vestibulum
                  vehicula nunc eget massa laoreet, ac tincidunt ante rhoncus.
                </div>
              </div>
              <div className='desc'>
                <div className='desc-icon'>
                  <SystemIcon />
                </div>
                <div className='desc-content text-left'>
                  Sed enim orci, euismod non luctus quis, laoreet ac metus. Sed
                  a magna in ex semper blandit et vitae justo. Sed eleifend
                  ultricies nulla a aliquet. Fusce eleifend, nunc ut pharetra
                  pulvinar, est nisl bibendum justo, vitae laoreet mauris mi
                  quis nunc.
                </div>
              </div>
            </div>
          </div>
          <div className='right-form'>
            <h3 className='form-title'>Login</h3>
            <input type='text' placeholder='user name' />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
