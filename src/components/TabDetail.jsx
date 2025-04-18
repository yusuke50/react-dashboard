import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import Dashboard from '../Pages/Dashboard';
import Ipsum from '../Pages/Ipsum';
import Dolor from '../Pages/Dolor';
import Sit from '../Pages/Sit';
import Sed from '../Pages/Sed';
import Vel from '../Pages/Vel';
import Vehicula from '../Pages/Vehicula';
import Vrna from '../Pages/Vrna';
import Ultrices from '../Pages/Ultrices';
import Cursus from '../Pages/Cursus';

library.add(fas, faTwitter, faFontAwesome);

const componentMap = {
  Dashboard: Dashboard,
  Ipsum: Ipsum,
  Dolor: Dolor,
  Sit: Sit,
  Sed: Sed,
  Vel: Vel,
  Vehicula: Vehicula,
  Vrna: Vrna,
  Ultrices: Ultrices,
  Cursus: Cursus,
};

const TabDetail = ({ name, checked, label, icon, onClose, onClick }) => {
  const PageComponent = componentMap[label] || null;

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick(label);
    }
  };

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.closest('button')) {
      if (onClose && name != 'Dashboard') {
        onClose();
      }
    }
  };

  return (
    <>
      <a
        role='tab'
        className={`tab ${checked ? ' tab-active' : ''}`}
        onClick={handleClick}
      >
        <span>{label}</span>
        {icon && (
          <button
            className='pl-2'
            type='button'
            aria-label={`Close ${label} tab`}
            onClick={handleRemove}
          >
            <FontAwesomeIcon icon='fa-solid fa-xmark' fixedWidth />
          </button>
        )}
      </a>

      <div className='tab-content border-base-100 p-6'>
        {PageComponent ? <PageComponent /> : <p>No Content</p>}
      </div>
    </>
  );
};

export default TabDetail;
