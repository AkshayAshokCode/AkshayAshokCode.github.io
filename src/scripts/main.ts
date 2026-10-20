import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(pointer: fine)').matches;

const $$ = <T extends Element = HTMLElement>(sel: string) => Array.from(document.querySelectorAll<T>(sel));

// Hero canvas: drifting particles that link up and lean away from the cursor.
function heroCanvas() {
  const canvas = document.querySelector<HTMLCanvasElement>('.hero-canvas');
  const ctx = canvas?.getContext('2d');
  if (!canvas || !ctx) return;

  const mouse = { x: -9999, y: -9999 };
  let w = 0;
  let h = 0;
  let points: { x: number; y: number; vx: number; vy: number }[] = [];

  const resize = () => {
    const dpr = Math.min(devicePixelRatio, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(110, (w * h) / 14000));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    for (const p of points) {
      if (!reduceMotion) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 22000) {
          p.x += dx * 0.02;
          p.y += dy * 0.02;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      ctx.fillStyle = 'rgba(255,255,255,0.55)';
      ctx.fillRect(p.x, p.y, 1.6, 1.6);
    }
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const a = points[i];
        const b = points[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.strokeStyle = `rgba(124,92,255,${(1 - d / 130) * 0.35})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
  };

  resize();
  addEventListener('resize', resize);

  if (reduceMotion) {
    draw();
    return;
  }

  canvas.parentElement?.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  canvas.parentElement?.addEventListener('pointerleave', () => {
    mouse.x = mouse.y = -9999;
  });

  // Pause while the hero is off screen.
  let visible = true;
  new IntersectionObserver(([entry]) => (visible = entry.isIntersecting)).observe(canvas);
  gsap.ticker.add(() => visible && draw());
}

function smoothScroll() {
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  $$<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!;
      e.preventDefault();
      lenis.scrollTo(id === '#top' ? 0 : id, { offset: -20 });
    }),
  );
}

function intro() {
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.to('.hero .char', { y: 0, duration: 1.4, stagger: 0.04 }, 0.15)
    .to('[data-intro]', { opacity: 1, duration: 1.2, stagger: 0.08 }, 0.7)
    .from('.hero [data-intro]', { y: 24, duration: 1.2, stagger: 0.08 }, 0.7);

  $$('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const obj = { v: 0 };
    tl.to(obj, { v: end, duration: 2, ease: 'power2.out', onUpdate: () => (el.textContent = String(Math.round(obj.v))) }, 0.9);
  });
}

function scrollEffects() {
  gsap.to('.progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });

  // Nav: border once scrolled, hide on scroll down, show on scroll up.
  const nav = document.querySelector('.nav');
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      nav?.classList.toggle('is-scrolled', self.scroll() > 20);
      nav?.classList.toggle('is-hidden', self.direction === 1 && self.scroll() > 400);
    },
  });

  $$('[data-split]').forEach((title) =>
    gsap.from(title.querySelectorAll('.word > span'), {
      yPercent: 110,
      duration: 1.2,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: title, start: 'top 85%' },
    }),
  );

  $$('[data-reveal]').forEach((el) =>
    gsap.from(el, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
    }),
  );

  // Floating tags drift at different speeds around the phones.
  $$('[data-speed]').forEach((el) =>
    gsap.fromTo(
      el,
      { y: 60 * Number(el.dataset.speed) },
      {
        y: -60 * Number(el.dataset.speed),
        ease: 'none',
        scrollTrigger: { trigger: el.closest('.art'), start: 'top bottom', end: 'bottom top', scrub: true },
      },
    ),
  );

  // About statement lights up word by word as you scroll through it.
  $$('[data-highlight]').forEach((el) =>
    gsap.to(el.children, {
      opacity: 1,
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 75%', end: 'bottom 45%', scrub: true },
    }),
  );

  // Hero name drifts apart as you scroll away.
  gsap.to('.hero .line:first-child', {
    xPercent: -8,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });
  gsap.to('.hero .line-outline', {
    xPercent: 8,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });
}

function pointerEffects() {
  // 3D tilt on the phone mockups.
  $$('[data-tilt]').forEach((art) => {
    const phone = art.querySelector('.phone');
    if (!phone) return;
    const rx = gsap.quickTo(phone, 'rotationX', { duration: 0.6, ease: 'power3.out' });
    const ry = gsap.quickTo(phone, 'rotationY', { duration: 0.6, ease: 'power3.out' });
    art.addEventListener('pointermove', (e) => {
      const r = art.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - 0.5) * 24);
      rx(-((e.clientY - r.top) / r.height - 0.5) * 24);
    });
    art.addEventListener('pointerleave', () => {
      rx(0);
      ry(0);
    });
  });

  // Magnetic buttons pull toward the cursor.
  $$('[data-magnetic]').forEach((el) => {
    const x = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
    const y = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - r.left - r.width / 2) * 0.35);
      y((e.clientY - r.top - r.height / 2) * 0.35);
    });
    el.addEventListener('pointerleave', () => {
      x(0);
      y(0);
    });
  });

  const cursor = document.querySelector<HTMLElement>('.cursor');
  if (!cursor) return;
  const cx = gsap.quickTo(cursor, 'x', { duration: 0.25, ease: 'power3.out' });
  const cy = gsap.quickTo(cursor, 'y', { duration: 0.25, ease: 'power3.out' });
  addEventListener('pointermove', (e) => {
    cx(e.clientX);
    cy(e.clientY);
  });
  $$('a, button').forEach((el) => {
    el.addEventListener('pointerenter', () => cursor.classList.add('is-hover'));
    el.addEventListener('pointerleave', () => cursor.classList.remove('is-hover'));
  });
}

heroCanvas();

if (!reduceMotion) {
  smoothScroll();
  intro();
  scrollEffects();
  if (finePointer) pointerEffects();
}
