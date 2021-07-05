export function render(element, node) {
  const { type } = element;
  const el = document.createElement(type);
  el.innerText = 'some';
  node.append(el);
}

// window.ReactDOM.render = render;
