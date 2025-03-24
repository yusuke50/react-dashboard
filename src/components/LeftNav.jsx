import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
library.add(fas, faTwitter, faFontAwesome);

const LeftNav = () => {
  return (
    <ul className='menu bg-background-gray w-56'>
      <li>
        <a>
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
              <a>
                <span>Ipsum</span>
              </a>
            </li>
            <li>
              <a>
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
                    <a>
                      <span>Sit</span>
                    </a>
                  </li>
                  <li>
                    <a>
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
              <a>
                <span>Vel</span>
              </a>
            </li>
            <li>
              <a>
                <span>Vehicula</span>
              </a>
            </li>
            <li>
              <a>
                <span>Vrna</span>
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>
          <FontAwesomeIcon icon='fa-solid fa-fire' fixedWidth />
          <span>Ultrices</span>
        </a>
      </li>
      <li>
        <a>
          <FontAwesomeIcon icon='fa-solid fa-tree' fixedWidth />
          <span>Cursus</span>
        </a>
      </li>
    </ul>
  );
};

export default LeftNav;
