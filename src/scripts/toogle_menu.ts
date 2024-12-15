const retrieveActivePage = () => {
  const header = document.getElementById("main-header") as HTMLElement;
  const menuToggle = document.getElementById("menu-toggle") as HTMLElement;
  const menu = document.getElementById("menu") as HTMLElement;

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.5) {
      header.classList.remove("bg-transparent");
      header.classList.add("bg-black", "bg-opacity-70", "shadow-lg");
    } else {
      header.classList.remove("bg-black", "bg-opacity-70", "shadow-lg");
      header.classList.add("bg-transparent");
    }
  });

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
};

document.addEventListener("astro:page-load", retrieveActivePage);
