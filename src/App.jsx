import { useState } from 'react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='top-header'>
        <div className='left-logo'>
          <div className='logo-icon'></div>
          <div className='logo-name'>Diamonds</div>
        </div>
        <div className='right-selector'>
          <div className='selector-icon'></div>
        </div>
      </div>
      <div className='login-form'>
        <div className='top-title'></div>
        <div className='left-description'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
            purus eu nibh porttitor semper. Quisque eget orci quis sem tristique
            condimentum. Donec non ex ac magna condimentum eleifend. Etiam porta
            nisl vitae ex rutrum cursus. Aliquam vel magna ac augue convallis
            elementum. Nunc placerat vulputate nisl, eu cursus sapien tincidunt
            vel.
          </p>
          <div className='sub-description'>
            <div className='desc'>
              <div className='desc-icon'></div>
              <div className='desc-content'>
                Praesent sapien leo, pellentesque sit amet consectetur sit amet,
                mattis vel risus. Nulla facilisi. Ut porta augue eu tortor
                auctor elementum. Donec ullamcorper dictum sapien eu tempus.
                Vivamus eget varius mauris, non maximus dolor.
              </div>
            </div>
            <div className='desc'>
              <div className='desc-icon'></div>
              <div className='desc-content'>
                Mauris vehicula urna velit. Proin placerat nunc eu augue
                elementum, semper auctor risus maximus. Vivamus ullamcorper
                faucibus arcu eu consectetur. Morbi a porttitor mi. Vestibulum
                vehicula nunc eget massa laoreet, ac tincidunt ante rhoncus.
              </div>
            </div>
            <div className='desc'>
              <div className='desc-icon'></div>
              <div className='desc-content'>
                Sed enim orci, euismod non luctus quis, laoreet ac metus. Sed a
                magna in ex semper blandit et vitae justo. Sed eleifend
                ultricies nulla a aliquet. Fusce eleifend, nunc ut pharetra
                pulvinar, est nisl bibendum justo, vitae laoreet mauris mi quis
                nunc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
