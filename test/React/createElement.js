window.React.createElement = function (type, props, ...children) {
  return {
    type,
    props,
    children,
  };
};