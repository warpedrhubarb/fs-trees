import {
  mkdir, mkfile, isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const downcaseFileNames = (tree) => {
  const newMeta = _.cloneDeep(getMeta(tree));
  const children = getChildren(tree);
  const newChildren = children.map((child) => {
    const name = getName(child);
    if (!isFile(child)) {
      return downcaseFileNames(child);
    }
    const newName = name.toLowerCase();
    return mkfile(newName, getMeta(child));
  });
  return mkdir(getName(tree), newChildren, newMeta);
};

export default downcaseFileNames;
