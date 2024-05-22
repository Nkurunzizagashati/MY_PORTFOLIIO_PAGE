let typed = new Typed("#typed", {
  strings: ["frontend developer", "backend developer", "fullstack developer"],
  typeSpeed: 50,
  loop: true,
});

const hamMenu = document.querySelector(".hamMenu");

hamMenu.addEventListener("click", () => {
  const navContainer = document.querySelector(".nav_container");
  const navListOpen = navContainer.getAttribute("navListOpen");

  if (navListOpen === "false") {
    document
      .querySelector(".nav_container")
      .setAttribute("navListOpen", "true");
  } else {
    document
      .querySelector(".nav_container")
      .setAttribute("navListOpen", "false");
  }

  if (hamMenu.classList.contains("fa-bars")) {
    hamMenu.classList.replace("fa-bars", "fa-xmark");
  } else {
    hamMenu.classList.replace("fa-xmark", "fa-bars");
  }
});

const navLinks = document.querySelectorAll(".nav_link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    document
      .querySelector(".nav_container")
      .setAttribute("navListOpen", "false");

    hamMenu.classList.replace("fa-xmark", "fa-bars");
  });
});
