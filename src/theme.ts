import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties;
    subtitle: React.CSSProperties;
    small: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    small?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    h1: false;
    subtitle: true;
    h2: false;
    small: true;
  }
}
const palette = {
  primary: { main: "#1219e0" },
  secondary: { main: "#003932" },
  text: {
    primary: "#1e1e1e",
    secondary: "#9294d4",
  },
}


const theme = createTheme({
  palette,
  typography: {
    fontFamily: "Circular, sans-serif",
    fontSize: 14,

    title: {
      fontSize: 48,
      fontWeight: "bold",
      fontFamily: "Georgia, serif",
      lineHeight: 1.33,
      color: palette.primary.main,
    },
    subtitle: {
      fontSize: 20,
      lineHeight: 1.25,
      color: palette.secondary.main,
    },

    small: {
      fontSize: 12,
      letterSpacing: ".01em",
    },
    button: {
      textTransform: "none",
    },
    h2: undefined,
    h3: undefined,


  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          title: 'h1',
          subtitle: 'h2',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        // disableElevation: "true",
        // color: "otherGreen",
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontSize: 15,
          fontWeight: "bold",
        },
        // sizeMedium: {
        //   paddingBottom: theme.spacing(1),
        //   paddingLeft: theme.spacing(3),
        //   paddingRight: theme.spacing(3),
        //   paddingTop: theme.spacing(1),
        // },
        // sizeSmall: {
        //   paddingLeft: theme.spacing(2),
        //   paddingRight: theme.spacing(2),
        // },
      },
      variants: [
        {
          props: { variant: "text" },
          style: {
            textDecoration: "underline",
            textDecorationThickness: "2px",
            textUnderlineOffset: "2px",
          },
        },
      ],
    },

  },
});

export default theme;