export const breakpoints = {
  smallPhone: {
    min: 'min-width: 320px',
    max: 'max-width: 320px',
  },
  smallPhonePortrait: {
    min: 'min-width: 568px',
    max: 'max-width: 568px',
  },
  phonePortrait: 'min-width: 321px',
  phoneLandscape: 'min-width: 415px',
  tabletPortrait: 'min-width: 768px',
  tabletLandscape: 'min-width: 1024px',
  desktop: 'min-width: 1025px',
  desktopWide: 'min-width: 1367px',
  desktopHD: 'min-width: 1681px',
  desktopMega: 'min-width: 1921px',
};

export const isDesktop = () => {
  return window.matchMedia(`(${breakpoints.desktop})`).matches;
};

export default breakpoints;
