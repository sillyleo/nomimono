import { createStitches } from "@stitches/react";
import figmaTokens from "./theme.json";

// a function that takes an object and flattens its keys into a string with custom seperator
// e.g. { colors: { red: { 1: "#fff" } } } => "colors-red-1"
function flattenKeys(obj: any, sep = "", parentKey = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const newKey = parentKey ? parentKey + sep + key : key;
    if (typeof value === "object") {
      Object.assign(acc, flattenKeys(value, sep, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
}

// process colors from tomato: {1: color} to tomato1: color

const lightColors = flattenKeys(figmaTokens.light);
const baseColors = flattenKeys(figmaTokens.base);
const darkColors = flattenKeys(figmaTokens.dark);

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...baseColors,
      ...lightColors,
    },
    space: {
      ...figmaTokens.spacing,
    },
    fontSizes: {
      ...figmaTokens.fontSizes,
    },
    fonts: {
      ...figmaTokens.fontFamilies,
    },
    fontWeights: {
      ...figmaTokens.fontWeights,
    },
    lineHeights: {
      ...figmaTokens.lineHeights,
    },
    letterSpacings: {
      ...figmaTokens.letterSpacing,
    },
    sizes: {},
    borderWidths: {
      ...figmaTokens.borderWidth,
    },
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
    // custom keys
    opacity: {
      ...figmaTokens.opacity,
    },
    paragraphSpacing: {
      ...figmaTokens.paragraphSpacing,
    },
  },

  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  },
  utils: {
    // Abbreviated margin properties
    m: (value: any) => ({
      margin: value,
    }),
    mt: (value: any) => ({
      marginTop: value,
    }),
    mr: (value: any) => ({
      marginRight: value,
    }),
    mb: (value: any) => ({
      marginBottom: value,
    }),
    ml: (value: any) => ({
      marginLeft: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // A property for applying width/height together
    size: (value: any) => ({
      width: value,
      height: value,
    }),

    // An abbreviated property for border-radius
    br: (value: any) => ({
      borderRadius: value,
    }),
  },
});

// only override some colors
export const darkTheme = createTheme({
  colors: {
    ...darkColors,
  },
});

export const globalStyles = globalCss({
  "*": { margin: 0, boxSizing: "border-box" },
});

const allColors = Object.keys(figmaTokens.colors);

// take allColors and generate an array of objects and stringify it
// eg. allColors.blue => { blue: { background: "$blue6" } }

export const colorVariantsData = allColors.reduce((acc: any, color: any) => {
  acc[color] = { background: `$${color}6` };
  return acc;
}, {});

export const colorVariants = JSON.stringify(colorVariantsData);

export const colorVariantsStatic = {
  tomato: { background: "$tomato6" },
  red: { background: "$red6" },
  crimson: { background: "$crimson6" },
  pink: { background: "$pink6" },
  plum: { background: "$plum6" },
  purple: { background: "$purple6" },
  violet: { background: "$violet6" },
  indigo: { background: "$indigo6" },
  blue: { background: "$blue6" },
  cyan: { background: "$cyan6" },
  teal: { background: "$teal6" },
  green: { background: "$green6" },
  grass: { background: "$grass6" },
  brown: { background: "$brown6" },
  orange: { background: "$orange6" },
  sky: { background: "$sky6" },
  mint: { background: "$mint6" },
  lime: { background: "$lime6" },
  yellow: { background: "$yellow6" },
  amber: { background: "$amber6" },
  gold: { background: "$gold6" },
  bronze: { background: "$bronze6" },
  gray: { background: "$gray6" },
  mauve: { background: "$mauve6" },
  slate: { background: "$slate6" },
  sage: { background: "$sage6" },
  olive: { background: "$olive6" },
  sand: { background: "$sand6" },
};