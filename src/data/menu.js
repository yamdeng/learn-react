import Box from '../components/layout/Box';
import Grid from '../components/layout/Grid';
import About from '../components/About';

const menu = [
  {
    title: 'Container',
    children: [
      { title: 'Box', path: 'layout/box', component: Box },
      { title: 'Grid', path: 'layout/grid', component: Grid }
    ]
  },
  {
    title: 'Panel',
    children: [
      { title: 'Card', path: 'about', component: About },
      { title: 'Paper', path: 'about', component: About }
    ]
  }
];

export default menu;
