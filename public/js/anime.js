/**
 * anime.js
 */
(function() {
  // box
  function initBox() {
    var box = anime({
      targets: '.el.box',
      translateX: 150,
      backgroundColor: '#e07b40',
      scale: 2,
      rotate: '1turn',
      direction: 'alternate',
      loop: true,
      delay: 500,
      easing: 'easeInOutQuad',
      duration: 300,
    });
  }

  // 初期化
  function init() {
    initBox();
  }

  window.addEventListener('load', init);
})();