/**
 * Animation and performance constants
 */

// Space Background Configuration
export const SPACE_CONFIG = {
  PARTICLE_COUNT: {
    DESKTOP: 150,
    TABLET: 75,
    MOBILE: 40,
  },
  PARTICLE_SIZE: {
    MIN: 0.5,
    MAX: 2.5,
  },
  PARTICLE_VELOCITY: {
    MIN: -0.5,
    MAX: 0.5,
    SCALE: 0.5,
  },
  PARTICLE_OPACITY: {
    MIN: 0.2,
    MAX: 1.0,
  },
  TWINKLE: {
    MIN: 0.01,
    MAX: 0.03,
  },
  CLICK_EFFECT: {
    EXPLOSION_PARTICLES: 8,
    MAX_RADIUS: {
      MIN: 50,
      MAX: 150,
    },
    GROWTH_RATE: 2,
    DECAY_RATE: 0.02,
    PARTICLE_DECAY: 0.03,
    VELOCITY_SCALE: 8,
    VELOCITY_FRICTION: 0.98,
  },
} as const;

// Scroll Animation Configuration
export const SCROLL_CONFIG = {
  THRESHOLD: 0.1,
  ROOT_MARGIN: '-50px 0px -50px 0px',
  STAGGER_DELAY: 100,
} as const;

// Responsive Breakpoints
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
} as const;
