import {
  mkdir, mkfile, isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const downcaseFileNames = (node) => {
  const newMeta = _.cloneDeep(getMeta(node));
  const children = getChildren(node);
  const newChildren = children.map((child) => {
    const name = getName(child);
    if (!isFile(child)) {
      return downcaseFileNames(child);
    }
    const newName = name.toLowerCase();
    return mkfile(newName, getMeta(child));
  });
  return mkdir(getName(node), newChildren, newMeta);
};

export default downcaseFileNames;
