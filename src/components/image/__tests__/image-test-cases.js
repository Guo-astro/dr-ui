import Image from '../image';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: Image,
  description: 'Basic',
  props: {
    imageId: 'thumbnailAdd3dBuildings',
    alt: '3d',
    path: './assets/',
    theme: 'border',
    caption: 'We are having eggs for dinner',
    config: {
      thumbnailAdd3dBuildings: {
        basename: 'thumbnail-add-3d-buildings.png',
        sizes: [{ width: 480 }, { width: 960 }]
      }
    }
  }
};

testCases.noDefaults = {
  component: Image,
  description: 'turn off defaults',
  props: {
    imageId: 'thumbnailAdd3dBuildings',
    alt: '3d',
    optimize: false,
    round: false,
    shadow: false,
    path: './assets/',
    config: {
      thumbnailAdd3dBuildings: {
        basename: 'thumbnail-add-3d-buildings.png',
        sizes: [{ width: 480 }, { width: 960 }]
      }
    }
  }
};

export { testCases, noRenderCases };
