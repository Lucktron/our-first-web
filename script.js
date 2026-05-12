document.body.classList.add("reveal-ready");

const productCards = document.querySelectorAll(".product-card, .process-list li, .use-grid article");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

productCards.forEach((card) => revealObserver.observe(card));
