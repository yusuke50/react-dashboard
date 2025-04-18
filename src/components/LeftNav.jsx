import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
library.add(fas, faTwitter, faFontAwesome);

const LeftNav = ({ addTab }) => {
  const handleItemClick = (item) => {
    addTab(item);
  };

  return (
    <ul className='menu bg-background-gray w-56'>
      <li>
        <a onClick={() => handleItemClick('Dashboard')}>
          <FontAwesomeIcon icon='fa-solid fa-house' fixedWidth />
          <span>Dashboard</span>
        </a>
      </li>
      <li>
        <details>
          <summary>
            <FontAwesomeIcon icon='fa-colid fa-dog' fixedWidth />
            <span>Lorem</span>
          </summary>
          <ul>
            <li>
              <a onClick={() => handleItemClick('Ipsum')}>
                <span>Ipsum</span>
              </a>
            </li>
            <li>
              <a onClick={() => handleItemClick('Dolor')}>
                <span>Dolor</span>
              </a>
            </li>
            <li>
              <details>
                <summary>
                  <span>Amet</span>
                </summary>
                <ul>
                  <li>
                    <a onClick={() => handleItemClick('Sit')}>
                      <span>Sit</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleItemClick('Sed')}>
                      <span>Sed</span>
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>
            <FontAwesomeIcon icon='fa-solid fa-star' fixedWidth />
            <span>Consectetur</span>
          </summary>
          <ul>
            <li>
              <a onClick={() => handleItemClick('Vel')}>
                <span>Vel</span>
              </a>
            </li>
            <li>
              <a onClick={() => handleItemClick('Vehicula')}>
                <span>Vehicula</span>
              </a>
            </li>
            <li>
              <a onClick={() => handleItemClick('Vrna')}>
                <span>Vrna</span>
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a onClick={() => handleItemClick('Ultrices')}>
          <FontAwesomeIcon icon='fa-solid fa-fire' fixedWidth />
          <span>Ultrices</span>
        </a>
      </li>
      <li>
        <a onClick={() => handleItemClick('Cursus')}>
          <FontAwesomeIcon icon='fa-solid fa-tree' fixedWidth />
          <span>Cursus</span>
        </a>
      </li>
    </ul>
  );
};

export default LeftNav;
