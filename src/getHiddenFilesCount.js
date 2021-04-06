import _ from 'lodash';
import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

const getHiddenFilesCount = (node) => {
  const name = getName(node);
  if (isFile(node)) {
    return name.startsWith('.') ? 1 : 0;
  }

  const children = getChildren(node);
  const hiddenFilesCounts = children.map(getHiddenFilesCount);
  return _.sum(hiddenFilesCounts);
};

export default getHiddenFilesCount;
