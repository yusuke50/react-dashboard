import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
library.add(fas, faTwitter, faFontAwesome);

const NavLink = ({ href, icon, label, dropdown, menuVisibility, onClick }) => {
  return (
    <a href={href} className='nav-link' onClick={onClick}>
      <div className='nav-link-main'>
        <div className='icon'>
          <FontAwesomeIcon icon={icon} fixedWidth />
        </div>
        <span>{label}</span>
      </div>

      {dropdown && (
        <div className='dropdown-icon'>
          <FontAwesomeIcon
            icon={`fa-solid fa-chevron-${menuVisibility ? 'up' : 'down'}`}
            fixedWidth
          />
        </div>
      )}
    </a>
  );
};

export default NavLink;
