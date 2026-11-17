const $$ = (sel: string) => Array.from(document.querySelectorAll<HTMLElement>(sel));

// Fade elements in once as they enter the viewport.
const revealer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        revealer.unobserve(e.target);
      }
    }
  },
  { rootMargin: '0px 0px -10% 0px' },
);
$$('[data-reveal]').forEach((el) => revealer.observe(el));

// Start an element's CSS animations once a good part of it is on screen.
const animator = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        animator.unobserve(e.target);
      }
    }
  },
  { threshold: 0.3 },
);
$$('[data-animate]').forEach((el) => animator.observe(el));
