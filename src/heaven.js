let props;

function applyConfig(config) {
  let props = config;
  props.starCount = config.starCount || 3;
  return props;
}

function init(element, config = {}) {
  typeof element === 'string' ? element = document.querySelector(element) : element = element;
  props = applyConfig(config);
}

let showProps = () => { console.log(props); }

export { init, showProps };
