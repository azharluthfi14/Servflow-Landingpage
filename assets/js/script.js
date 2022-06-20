/* Show Navbar  */
const showMenu = (toggleId, navbarId, hamburgerId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navbarId);
  isActive = document.getElementById(hamburgerId);

  if (toggle && nav && isActive) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("show__navbar");
      isActive.classList.toggle("is-active");
    });
  }
};

showMenu("navbar-open", "navbar-menu", "hamburger-1");
