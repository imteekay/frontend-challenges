import { AdultsCountInput } from '../AdultsCountInput';
import { ChildrenCountInput } from '../ChildrenCountInput';
import { ChildrenSelect } from '../ChildrenSelect';

export const GuestRoom = ({ room = 'Room 1' }) => (
  <>
    <AdultsCountInput room={room} />
    <ChildrenCountInput room={room} />
    <ChildrenSelect room={room} />
  </>
);
