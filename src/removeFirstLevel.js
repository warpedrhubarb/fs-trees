export default (node) => {
  const nodes = node.filter(Array.isArray);
  return nodes.flat();
};
