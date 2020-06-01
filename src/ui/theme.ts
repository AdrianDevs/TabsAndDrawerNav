import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  spacing: (factor) => `${0.5 * factor}rem`, // (Bootstrap strategy) | = 0.5 * 2rem = 1rem = 16px
});

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiToolbar: {
      regular: {
        minHeight: defaultTheme.spacing(6), // 0.5 * 6rem = 4rem = 48px
        [defaultTheme.breakpoints.up('sm')]: {
          // same as '@media (min-width: 600px)':
          minHeight: defaultTheme.spacing(6),
        },
      },
      gutters: {
        paddingLeft: defaultTheme.spacing(2),
        paddingRight: defaultTheme.spacing(2),
        [defaultTheme.breakpoints.down('sm')]: {
          paddingLeft: defaultTheme.spacing(2),
          paddingRight: defaultTheme.spacing(2),
        },
        // [defaultTheme.breakpoints.up('sm')]: {
        //   paddingLeft: defaultTheme.spacing(2),
        //   paddingRight: defaultTheme.spacing(2),
        // },
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: defaultTheme.spacing(6),
      [defaultTheme.breakpoints.up('sm')]: {
        minHeight: defaultTheme.spacing(6),
      },
    },
  },
  palette: {
    type: 'light',
  },
});

export default theme;

// const theme = createMuiTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1280,
//       xl: 1920,
//     },
//   },
//   overrides: {
//     MuiToolbar: {
//       regular: {
//         minHeight: defaultTheme.spacing(8), // 0.5 * 8rem = 4rem = 64px
//         [defaultTheme.breakpoints.up('sm')]: {
//           // same as '@media (min-width: 600px)':
//           minHeight: defaultTheme.spacing(8),
//         },
//       },
//       gutters: {
//         paddingLeft: defaultTheme.spacing(2),
//         paddingRight: defaultTheme.spacing(2),
//         [defaultTheme.breakpoints.down('sm')]: {
//           paddingLeft: defaultTheme.spacing(2),
//           paddingRight: defaultTheme.spacing(2),
//         },
//         // [defaultTheme.breakpoints.up('sm')]: {
//         //   paddingLeft: defaultTheme.spacing(2),
//         //   paddingRight: defaultTheme.spacing(2),
//         // },
//       },
//     },
//   },
//   mixins: {
//     toolbar: {
//       minHeight: defaultTheme.spacing(8),
//       [defaultTheme.breakpoints.up('sm')]: {
//         minHeight: defaultTheme.spacing(8),
//       },
//     },
//   },
//   palette: {
//     type: 'light',
//   },
// });
