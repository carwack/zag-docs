import { em, round } from "./theme-utils"

export const space = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
}

const sizes = {
  ...space,
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
}

const theme = {
  config: {
    useSystemColorMode: true,
    initialColorMode: "light",
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  sizes,
  space,
  colors: {
    bg: "#fff",
    fg: "#000",
    text: "#e5e5e5",
    gray: {
      "1000": "#1c1c1c",
      "900": "#232323",
      "800": "#282828",
      "700": "#2e2e2e",
      "600": "#343434",
      "500": "#3e3e3e",
      "400": "#505050",
      "300": "#707070",
      "200": "#7e7e7e",
      "100": "#a0a0a0",
      "50": "#ededed",
    },
    red: {
      lighter: "#F7D4D6",
      light: "#FF1A1A",
      default: "#E00",
      dark: "#C50000",
    },
    orange: {
      lighter: "#FFEFCF",
      light: "#F7B955",
      default: "#F5A623",
      dark: "#AB570A",
    },
    blue: {
      lighter: "#D3E5FF",
      light: "#3291FF",
      default: "#0070F3",
      dark: "#0761D1",
    },
    violet: {
      lighter: "#D8CCF1",
      light: "#8A63D2",
      default: "#7928CA",
      dark: "#4C2889",
    },
    cyan: {
      lighter: "#AAFFEC",
      light: "#79FFE1",
      default: "#50E3C2",
      dark: "#29BC9B",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.1000",
        color: "text",
      },
      ":root": {
        "--font-fallback":
          '-apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
      },
      ol: {
        marginTop: em(16, 14),
        marginBottom: em(16, 14),
      },
      ul: {
        marginTop: em(16, 14),
        marginBottom: em(16, 14),
      },
      li: {
        marginTop: em(4, 14),
        marginBottom: em(4, 14),
      },
      "ol, ul": {
        paddingLeft: em(22, 14),
      },
      "h2,h3,h4": {
        scrollMarginTop: "32px",
        "&:hover": {
          "a.anchor": {
            opacity: 1,
          },
        },
      },
      "p+p": {
        marginTop: em(16, 14),
      },
      "a.anchor": {
        opacity: 0,
        transition: "opacity 0.2s ease-in-out",
        margin: "0 0.25rem",
        "&:before": {
          content: `"#"`,
        },
      },
    },
  },
  fonts: {
    heading: '"Inter", var(--font-fallback)',
    body: '"Inter", var(--font-fallback)',
  },
  fontSizes: {
    xs: em(12, 16),
    sm: em(14, 16),
    md: em(16, 16),
    lg: em(18, 16),
    xl: em(20, 16),
    "2xl": em(24, 16),
  },
  textStyles: {
    h1: {
      fontFamily: "heading",
      color: "white",
      fontWeight: 600,
      letterSpacing: "-0.05rem",
      fontSize: "1.5rem",
      marginTop: "0",
      marginBottom: em(24, 30),
      lineHeight: round(36 / 30),
    },
    h2: {
      fontWeight: 500,
      color: "gray.100",
      fontFamily: "heading",
      fontSize: "1.2rem",
      marginTop: "3rem",
      marginBottom: em(16, 20),
      lineHeight: round(28 / 20),
    },
    h3: {
      fontFamily: "heading",
      fontSize: em(18, 14),
      marginTop: em(28, 18),
      marginBottom: em(8, 18),
      lineHeight: round(28 / 18),
    },
    h4: {
      marginTop: em(20, 14),
      marginBottom: em(8, 14),
      lineHeight: round(20 / 14),
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
    },
    h6: {
      fontSize: ".875rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
    },
    a: {
      color: "gray.50",
      cursor: "pointer",
      transitionProperty: "text-decoration-color",
      textDecoration: "underline",
      textDecorationColor: "gray.300",
      textDecorationThickness: "2px",
      textUnderlineOffset: "1px",
    },
  },
}

export default theme
