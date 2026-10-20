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
