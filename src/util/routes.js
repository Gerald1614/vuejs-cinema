
import Overview from '../components/Overview.vue';
import Detail from '../components/Detail.vue';

export default [
  { path: '/', component: Overview },
  { path: '/movie/:id', component: Detail, name: 'movie' },
  { path: '*', redirect: '/'}
]