    function toggleMenu() {
      const menu = document.getElementById("menu");
      const container = document.getElementById("navbarContainer");
      
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        container.classList.remove("menu-open");
      } else {
        menu.classList.remove("show");
        void menu.offsetWidth; // trigger reflow
        menu.classList.add("show");
        container.classList.add("menu-open");
      }
    }
    
    function handleResize() {
      const menu = document.getElementById("menu");
      const container = document.getElementById("navbarContainer");
      
      if (window.innerWidth > 768) {
        menu.classList.add("show");
        container.classList.remove("menu-open");
      } else {
        menu.classList.remove("show");
        container.classList.remove("menu-open");
      }
    }
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("DOMContentLoaded", handleResize);