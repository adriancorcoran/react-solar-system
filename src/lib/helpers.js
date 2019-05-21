// get the position of an element on the page
exports.getPosition = el => {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    cy: rect.top + scrollTop + rect.height / 2,
    cx: rect.left + scrollLeft + rect.width / 2
  };
};
// get the zIndex of an element on the page
exports.getZIndex = el => {
  return parseInt(el.style.zIndex);
};
