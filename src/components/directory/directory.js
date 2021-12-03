import React from 'react';

import MenuItem from '../menu-item/menu-item';

import './directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Apparel',
          imageUrl: 'https://photos.thetrek.co/wp-content/uploads/2020/11/24090400/beanie-square-2.png',
          id: 1,
          linkUrl: 'apparel'
        },
        {
          title: 'Parts',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0354/1440/9260/files/sonder-bike-parts-m.jpg?v=14833519068619812245',
          id: 2,
          linkUrl: 'parts'
        },
        {
          title: 'Gear',
          imageUrl: 'https://trek.scene7.com/is/image/TrekBicycleProducts/PLP_mountain_bike_helmets?$responsive-pjpg$&cache=on,on&wid=1920',
          id: 3,
          linkUrl: 'gear'
        },
        {
          title: 'Bikes',
          imageUrl: 'https://www.sefiles.net/merchant/1074/images/site/1074_LP_Trek-Bikes-img-1-slimC.jpg?t=1534950013086',
          size: 'large',
          id: 4,
          linkUrl: 'bikes'
        },
        {
          title: 'Service',
          imageUrl: 'https://i0.wp.com/bicycleuniverse.com/wp-content/uploads/2018/06/Bike-Maintenance.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'service'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
