import _ from 'lodash';
import {
  isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';

const getSizes = (node) => {
  if (isFile(node)) {
    return getMeta(node).size;
  }
  const children = getChildren(node);
  const sizes = children.map(getSizes);
  return _.sum(sizes);
};

const du = (node) => {
  const children = getChildren(node);
  const result = children.map((child) => [getName(child), getSizes(child)]);
  return result.sort(([, a], [, b]) => b - a);
};

export default du;
