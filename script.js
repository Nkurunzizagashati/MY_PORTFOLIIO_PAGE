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
});
