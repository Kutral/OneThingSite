const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const glowTarget = document.querySelector("[data-glow]");

if (glowTarget && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  glowTarget.addEventListener("pointermove", (event) => {
    const bounds = glowTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    glowTarget.style.setProperty("--glow-x", `${x}%`);
    glowTarget.style.setProperty("--glow-y", `${y}%`);
  });
}
