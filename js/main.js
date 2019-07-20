window.addEventListener('load', function() {
  var menu = document.querySelector("#menu");
  var nav = document.querySelector(".nav-sm");

  function openMenu(e)
  {
  	nav.classList.toggle("open");
    e.stopPropagation();
  };

  function closeMenu(e) {
    nav.classList.remove("open");
  };

  menu.addEventListener("click", openMenu);

  /******************************************************************************/

  var canvas = document.querySelector("#canvas");
  var sceneManager = new SceneManager(canvas);

  bindEventListeners();
  render();

  function bindEventListeners() {
  	window.onresize = resizeCanvas;
  	resizeCanvas();
  }

  function resizeCanvas() {
  	canvas.style.width = '100%';
  	canvas.style.height= '100%';

  	canvas.width  = canvas.offsetWidth;
  	canvas.height = canvas.offsetHeight;

      sceneManager.onWindowResize();
  }

  function render() {
      requestAnimationFrame(render);
      sceneManager.update();
  }
});
