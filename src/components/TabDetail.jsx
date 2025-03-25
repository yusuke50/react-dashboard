import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import Dashboard from '../Pages/Dashboard';
import Ultrices from '../Pages/Ultrices';
import Cursus from '../Pages/Cursus';

library.add(fas, faTwitter, faFontAwesome);

const componentMap = {
  Dashboard: Dashboard,
  Ultrices: Ultrices,
  Cursus: Cursus,
};

const TabDetail = ({ name, checked, label, icon }) => {
  const PageComponent = componentMap[label] || null;

  return (
    <>
      <label className='tab'>
        <input type='radio' name={name} defaultChecked={checked} />
        <span>{label}</span>

        {icon && (
          <div className='pl-2'>
            <FontAwesomeIcon icon='fa-solid fa-xmark' fixedWidth />
          </div>
        )}
      </label>
      <div className='tab-content border-base-100 p-6'>
        {PageComponent && <PageComponent />}
      </div>
    </>
  );
};

export default TabDetail;
