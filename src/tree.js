import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

export default (node) => {
  const children = getChildren(node);
  const newChildren = children.map((child) => {
    const name = getName(child);
    if (!isFile(child) || !child.name.endsWith('.jpg')) {
      return child;
    }
    const meta = _.cloneDeep(getMeta(child));
    meta.size /= 2;
    return mkfile(name, meta);
  });
  const newMeta = _.cloneDeep(getMeta(node));
  return mkdir(getName(node), newChildren, newMeta);
};
