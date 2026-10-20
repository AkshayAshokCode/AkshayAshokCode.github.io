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

// GameDay tour: the step nearest the middle of the screen picks which
// screenshot the sticky phone shows.
const steps = $$('[data-step]');
const screens = $$('[data-screen]');

const stepper = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const i = (e.target as HTMLElement).dataset.step;
      steps.forEach((s) => s.classList.toggle('is-active', s.dataset.step === i));
      screens.forEach((s) => s.classList.toggle('is-active', s.dataset.screen === i));
    }
  },
  { rootMargin: '-45% 0px -45% 0px' },
);
steps.forEach((el) => stepper.observe(el));
