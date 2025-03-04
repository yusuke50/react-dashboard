import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
library.add(fas, faTwitter, faFontAwesome);

const NavLink = ({ href, icon, label }) => {
  return (
    <a href={href} className='nav-link'>
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </a>
  );
};

export default NavLink;
