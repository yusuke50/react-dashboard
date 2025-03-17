import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
library.add(fas, faTwitter, faFontAwesome);

const items = [
  {
    key: 'dash',
    label: 'Dashboard',
    icon: <FontAwesomeIcon icon='fa-solid fa-house' fixedWidth />,
  },
  {
    key: 'sub2',
    label: 'Lorem',
    icon: <FontAwesomeIcon icon='fa-solid fa-dog' fixedWidth />,
    children: [
      {
        key: '5',
        label: 'Ipsum',
      },
      {
        key: '6',
        label: 'Dolor',
      },
      {
        key: 'sub3',
        label: 'Amet',
        children: [
          {
            key: '7',
            label: 'Sit',
          },
          {
            key: '8',
            label: 'Sed',
          },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Consectetur',
    icon: <FontAwesomeIcon icon='fa-solid fa-star' fixedWidth />,
    children: [
      {
        key: '9',
        label: 'Vel',
      },
      {
        key: '10',
        label: 'Vehicula ',
      },
      {
        key: '11',
        label: 'Vrna',
      },
    ],
  },
  {
    key: 'fire',
    label: 'Ultrices',
    icon: <FontAwesomeIcon icon='fa-solid fa-fire' fixedWidth />,
  },
  {
    key: 'cursus',
    label: 'Cursus',
    icon: <FontAwesomeIcon icon='fa-solid fa-tree' fixedWidth />,
  },
];

const LeftNav = () => {
  return <Menu style={{ width: 250 }} mode='inline' items={items} />;
};

export default LeftNav;
