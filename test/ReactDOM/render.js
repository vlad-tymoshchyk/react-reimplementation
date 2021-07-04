window.ReactDOM.render = function (element, node) {
  const { type } = element;
  const el = document.createElement(type);
  el.innerText = 'some';
  node.append(el);
};
