(() => {
  document.addEventListener("DOMContentLoaded", () => {
    // SCROLL REVEAL
    const sr = ScrollReveal();
//     const sr = ScrollReveal({ viewFactor: 0 , viewOffset { top: 60}});

    //ABOUT ME
    sr.reveal(".about-me-headline", {
      delay: 400,
      duration: 400,
      easing: "ease-in-out",
      distance: `100px`,
      origin: "left",
    });
    sr.reveal(".about-me-text", {
      delay: 500,
      duration: 400,
      easing: "ease-in-out",
      distance: `100px`,
      origin: "left",
    });
    sr.reveal(".about-me-image", {
      delay: 300,
      duration: 400,
      easing: "ease-in-out",
      distance: `100px`,
      origin: "left",
    });

    //SKILLS
    sr.reveal(".skills-header", {
      delay: 300,
      duration: 400,
      easing: "ease-in-out",
      distance: `100px`,
      origin: "top",
    });
    sr.reveal(".skills-level-header", {
      delay: 400,
      duration: 400,
      easing: "ease-in-out",
      distance: `100px`,
      origin: "top",
    });
    sr.reveal(".skill", {
      delay: 500,
      duration: 400,
      easing: "ease-in-out",
      distance: `100px`,
      origin: "left",
      interval: 16,
    });

    //PROJECTS
    sr.reveal(".projects-header", {
      delay: 300,
      duration: 400,
      easing: "ease-in-out",
      distance: `100px`,
      origin: "top",
    });
    sr.reveal(".project", {
      delay: 500,
      duration: 400,
      easing: "ease-in-out",
      distance: `100px`,
      origin: "left",
      interval: 40,
    });

    //CONTACT
    sr.reveal(".contact-header", {
      delay: 300,
      duration: 400,
      easing: "ease-in-out",
      distance: `100px`,
      origin: "top",
    });
    sr.reveal(".form-inputs", {
      delay: 500,
      duration: 400,
      easing: "ease-in-out",
      distance: `100px`,
      origin: "left",
      interval: 40,
    });
    sr.reveal(".input-group label", {
      delay: 500,
      duration: 400,
      easing: "ease-in-out",
      distance: `100px`,
      origin: "left",
      interval: 40,
    });
    sr.reveal("#form-submit", {
      delay: 700,
      duration: 400,
      easing: "ease-in-out",
      distance: `100px`,
      origin: "left",
    });
  });
})();
