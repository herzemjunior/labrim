const events = document.querySelectorAll(".event");

events.forEach((event) => {
  const card = event.querySelector(".card");

  card.addEventListener("click", () => {
    const wasActive = event.classList.contains("active");

    events.forEach((item) => item.classList.remove("active"));

    if (!wasActive) {
      event.classList.add("active");
      event.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.25
  }
);

events.forEach((event) => observer.observe(event));