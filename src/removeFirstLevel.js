export default (tree) => {
  const nodes = tree.filter(Array.isArray);
  return nodes.flat();
};
