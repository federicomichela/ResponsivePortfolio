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
});
