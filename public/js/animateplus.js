import animate from "./lib/animateplus.js";

/**
 * animeplus.js
 */
(function() {
  // box
  function initBox() {
    var box = animate({
      elements: ".el.box",
      duration: 2000,
      delay: index => index * 100,
      transform: ["scale(0)", "scale(1)"]
    })
    .then(options => animate({
      ...options,
      transform: ["translate(0%)", "translate(500%)"]
    }));
  }

  // 初期化
  function init() {
    initBox();
  }

  window.addEventListener('load', init);
})();