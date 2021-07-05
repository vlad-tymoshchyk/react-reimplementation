export function createElement(type, props, children) {
  const filteredProps = {};
  const element = {
    $$typeof: Symbol.for('react.element'),
    type,
    key: null,
    ref: null,
    _owner: null,
    _store: {},
    props: filteredProps,
  };

  if (props) {
    Object.entries(props).forEach(([propName, propValue]) => {
      switch (propName) {
        case 'key':
          element.key = '' + propValue;
          break;
        default:
          filteredProps[propName] = propValue;
          break;
      }
    });
  }
  return element;
}
