// Smooth scroll — drive Lenis entirely via GSAP ticker for sync
const lenis = new Lenis({
  duration: 1.1,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

gsap.registerPlugin(ScrollTrigger);

// Wire Lenis → GSAP so ScrollTrigger stays in sync
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// Staggered tile entrance — homepage only
const tiles = gsap.utils.toArray('.homepage-tile-link');
if (tiles.length) {
  gsap.from(tiles, {
    scrollTrigger: {
      trigger: '.timeline-wrapper',
      start: 'top 85%',
    },
    y: 48,
    opacity: 0,
    duration: 0.8,
    stagger: 0.07,
    ease: 'power3.out',
    clearProps: 'all',
  });
}
