/**
 * mo.js
 */
(function() {
  // box
  function initBox() {
    var square = document.querySelector('.el.box');
    new mojs.Tween({
      repeat: 999,
      delay: 2000,
      onUpdate: function (progress) {
        var bounceProgress = mojs.easing.bounce.out(progress);
        square.style.transform = 'translateY(' + 100*bounceProgress + 'px)';
      }
    }).play();
  }

  // 初期化
  function init() {
    initBox();
  }

  window.addEventListener('load', init);
})();