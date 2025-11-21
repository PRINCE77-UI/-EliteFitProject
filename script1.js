
    window.addEventListener("load", () => {
      const loader = document.getElementById("preloader");
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 500);
    });
    const fadeElements = document.querySelectorAll('.fade-in-up, .zoom-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    fadeElements.forEach(el => observer.observe(el));

    
  function logoutUser() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "auth.html";
  }