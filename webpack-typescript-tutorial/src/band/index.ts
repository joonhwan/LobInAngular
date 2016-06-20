import bandList from './bandList';
import bandInfo from './band-info';

export default function(app) {
  bandInfo(app);
  bandList(app);
}