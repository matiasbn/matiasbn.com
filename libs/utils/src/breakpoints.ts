export const breakpoints = {
  smallPhone: {
    portrait: {
      min: 'min-width: 320px',
      max: 'max-width: 321px',
    },
    landscape: {
      min: 'min-height: 320px',
      max: 'max-height: 321px',
    },
  },
  phone: {
    portrait: {
      min: 'min-width: 375px',
      max: 'max-width: 414px',
    },
    landscape: {
      min: 'min-height: 374px',
      max: 'max-height: 414px',
    },
  },
  tablet: {
    portrait: {
      min: 'min-width: 768px',
      max: 'max-width: 768px',
    },
    landscape: {
      min: 'min-width: 1024px',
      max: 'max-width: 1024px',
    },
  },
  desktop: {
    portrait: {
      min: 'min-width: 1280px',
      max: 'max-width: 2560px',
    },
    landscape: {
      min: 'min-width: 1024px',
      max: 'max-width: 2560px',
    },
  },
};

export const isDesktop = () => {
  return window.matchMedia(`(${breakpoints.desktop.portrait.min})`).matches;
};

export default breakpoints;
