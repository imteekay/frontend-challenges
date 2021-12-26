import loadable from '@loadable/component';

export default loadable(
  /* webpackChunkName: "GuestRoomDialog" */ () => import('./GuestRoomDialog')
);
