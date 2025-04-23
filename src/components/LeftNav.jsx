import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
library.add(fas, faTwitter, faFontAwesome);

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

const componentMapping = {
  dashboard: Dashboard,
  ipsum: Ipsum,
  dolor: Dolor,
  sit: Sit,
  sed: Sed,
  vel: Vel,
  vehicula: Vehicula,
  vrna: Vrna,
  ultrices: Ultrices,
  cursus: Cursus,
};
const items = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <FontAwesomeIcon icon='fa-solid fa-house' fixedWidth />,
  },
  {
    key: 'lorem',
    label: 'Lorem',
    icon: <FontAwesomeIcon icon='fa-solid fa-dog' fixedWidth />,
    children: [
      {
        key: 'ipsum',
        label: 'Ipsum',
      },
      {
        key: 'dolor',
        label: 'Dolor',
      },
      {
        key: 'amet',
        label: 'Amet',
        children: [
          {
            key: 'sit',
            label: 'Sit',
          },
          {
            key: 'sed',
            label: 'Sed',
          },
        ],
      },
    ],
  },
  {
    key: 'consectetur',
    label: 'Consectetur',
    icon: <FontAwesomeIcon icon='fa-solid fa-star' fixedWidth />,
    children: [
      {
        key: 'vel',
        label: 'Vel',
      },
      {
        key: 'vehicula',
        label: 'Vehicula ',
      },
      {
        key: 'vrna',
        label: 'Vrna',
      },
    ],
  },
  {
    key: 'ultrices',
    label: 'Ultrices',
    icon: <FontAwesomeIcon icon='fa-solid fa-fire' fixedWidth />,
  },
  {
    key: 'cursus',
    label: 'Cursus',
    icon: <FontAwesomeIcon icon='fa-solid fa-tree' fixedWidth />,
  },
];

const LeftNav = ({ addTab, removeTab }) => {
  const capitalizeFirstChar = (str) => {
    if (!str) {
      return str;
    }
    const [first, ...rest] = str;
    return first.toUpperCase() + rest.join('');
  };

  const handleMenuClick = (key) => {
    const Component = componentMapping[key];

    if (!Component) {
      return;
    }

    const tabObj = {
      label: capitalizeFirstChar(key),
      key: `/${key}`,
      children: <Component />,
    };

    if (key != 'dashboard') {
      tabObj.icon = (
        <FontAwesomeIcon
          icon='fa-solid fa-xmark'
          fixedWidth
          onClick={() => removeTab(tabObj.key)}
        />
      );
    }
    addTab(tabObj);
  };

  return (
    <Menu
      style={{ width: 250 }}
      mode='inline'
      items={items.map((item) => ({
        ...item,
        onClick: () => {
          if (item.children) {
            return;
          }
          handleMenuClick(item.key);
        },
        children: item.children
          ? item.children.map((child) => ({
              ...child,
              onClick: () => {
                if (child.children) {
                  return;
                }
                handleMenuClick(child.key);
              },
              children: child.children
                ? child.children.map((grandchild) => ({
                    ...grandchild,
                    onClick: () => handleMenuClick(grandchild.key),
                  }))
                : undefined,
            }))
          : undefined,
      }))}
    />
  );
};

export default LeftNav;
