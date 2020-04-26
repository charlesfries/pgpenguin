import { helper } from '@ember/component/helper';

export default helper(function timestamp([date]) {
  return date.toLocaleString();
});
