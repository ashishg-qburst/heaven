function applyConfig(config) {
  let props = config;
  props.count = config.count || 3;
  return props;
}

function init(element, config = {}) {
  typeof element === "string"
    ? (element = document.querySelector(element))
    : (element = element);
  console.log(element);
  element.heaven = {};
  element.heaven.props = applyConfig(config);
  element.heaven.showProps = showProps;
  return element;
}

function showProps() {
  console.log(this.props);
}

export { init, showProps };
