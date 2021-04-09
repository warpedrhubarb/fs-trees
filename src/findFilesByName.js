import path from 'path';
import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const findFilesByName = (tree, keyword) => {
  const iter = (node, ancestry) => {
    const name = getName(node);
    const fullPath = path.join(ancestry, name);
    const children = getChildren(node);

    if (isFile(node)) {
      return name.includes(keyword) ? fullPath : [];
    }

    return children.flatMap((child) => iter(child, fullPath));
  };

  return iter(tree, '');
};

export default findFilesByName;
