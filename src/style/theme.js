const HEATMAP_WIDTH = 1114;
const HEATMAP_DAY_WIDTH = 154;

const theme = {
  background: {
    color: {
      default: 'red',
    },
    // default: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
    default: '#fff',
  },
  size: {
    headerHeight: '100px',
    footerHeight: '100px',
    heatmap: {
      width: HEATMAP_WIDTH,
      headerHeight: 52,
      dayWidth: HEATMAP_DAY_WIDTH,
      hour: (HEATMAP_WIDTH - HEATMAP_DAY_WIDTH) / 24,
    },
  },
  color: {
    text: '#93918f',
    dargk: '#000',
    midDark: '#636363',
    midLight: '#d5d5d5',
    light: '#fff',
    primary: '#fdb755',
    postsTable: {
      link: '#0087ff',
    },
    heatmap: {
      highlight: '#c0392b',
      dayBackground: '#1e2537',
      hourBackgroundDefault: [
        '#e0e592',
        '#aed396',
        '#a9d194',
        '#a0ce93',
        '#99cd94',
        '#8cc894',
        '#5eb391',
        '#5db492',
        '#5cb391',
        '#5aad8c',
        '#3984a3',
      ],
      hourBackground1: [
        '#b4a7a0',
        '#a6958e',
        '#9f8c85',
        '#a08881',
        '#b0837c',
        '#d97a73',
        '#6f1B1D',
        '#501B1D',
        '#3f1B1D',
        '#2E1114',
      ],
      hourBackground2: [
        '#FEFFFF',
        '#F0EBF4',
        '#F5E6CC',
        '#F1d4C1',
        '#D8C3A5',
        '#D9B08C',
        '#7A685A',
        '#7E4E50',
        '#84485C',
        '#501B1D',
        '#2E1114',
      ],
      hourBackground3: [
        '#eccd54',
        '#e5be4a',
        '#d8a036',
        '#d2912d',
        '#cb8223',
        '#c47319',
        '#c16b14',
        '#bf6712',
        '#9d630f',
        '#501010',
        '#201114',
      ],
      hourHoverBorder: '#1e2537',
      headerHour: '#787878',
      headerBorder: '#f3f3f3',
      headerBackground: 'linear-gradient(to bottom, #fefefe, #e9e9e9)',

    },
  },
  font: {
    family: {
      default: '"Montserrat", sans-serif',
      headline: '"Bitter", serif',
    },
    size: {
      default: '16px',
      small: '14px',
      large: '38px',
    },
  },
  lineHeight: {
    default: 1.69,
  },
  letterSpacing: {
    default: '0.03px',
    heading: 'normal',
  },
};

export default theme;
