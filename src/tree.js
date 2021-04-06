import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

export default (tree) => {
  const children = getChildren(tree);
  const newChildren = children.map((child) => {
    const name = getName(child);
    if (!isFile(child) || !child.name.endsWith('.jpg')) {
      return child;
    }
    const meta = _.cloneDeep(getMeta(child));
    meta.size /= 2;
    return mkfile(name, meta);
  });
  const newMeta = _.cloneDeep(getMeta(tree));
  return mkdir(getName(tree), newChildren, newMeta);
};
