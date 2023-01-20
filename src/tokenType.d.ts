interface RootObject {
  colors: Colors;
  borderRadius: BorderRadius;
  borderWidth: BorderWidth;
  opacity: Opacity;
  fontFamilies: FontFamilies;
  lineHeights: LineHeights;
  letterSpacing: LetterSpacing;
  fontWeights: FontWeights;
  fontSizes: FontSizes;
  typography: Typography;
  paragraphSpacing: ParagraphSpacing;
  light: Light;
  dark: Light;
  spacing: Spacing;
  screens: Screens;
  boxShadow: BoxShadow;
  base: Base;
  tokenSetOrder: TokenSetOrder;
}
interface TokenSetOrder {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
}
interface Base {
  white: string;
  black: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
}
interface BoxShadow {
  sm: Sm;
  DEFAULT: Sm[];
  md: Sm[];
  lg: Lg[];
  xl: Sm[];
  '2xl': Sm[];
  inner: Sm;
}
interface Lg {
  x: number;
  y: number;
  blur: number;
  spread: number | string;
  color: string;
  type: string;
}
interface Sm {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  type: string;
}
interface Screens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}
interface Spacing {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
  '14': string;
  '16': string;
  '20': string;
  '24': string;
  '28': string;
  '32': string;
  '36': string;
  '40': string;
  '44': string;
  '48': string;
  '52': string;
  '56': string;
  '60': string;
  '64': string;
  '72': string;
  '80': string;
  '96': string;
  px: string;
}
interface Light {
  tomato: Tomato;
  red: Tomato;
  crimson: Tomato;
  pink: Tomato;
  plum: Tomato;
  purple: Tomato;
  violet: Tomato;
  indigo: Tomato;
  blue: Tomato;
  cyan: Tomato;
  teal: Tomato;
  green: Tomato;
  grass: Tomato;
  brown: Tomato;
  orange: Tomato;
  sky: Tomato;
  mint: Tomato;
  lime: Tomato;
  yellow: Tomato;
  amber: Tomato;
  gold: Tomato;
  bronze: Tomato;
  gray: Tomato;
  mauve: Tomato;
  slate: Tomato;
  sage: Tomato;
  olive: Tomato;
  sand: Tomato;
}
interface ParagraphSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
interface Typography {
  'page-title': Pagetitle;
  title1: Pagetitle;
  title2: Pagetitle;
  title3: Pagetitle;
  subtitle1: Pagetitle;
  subtitle2: Pagetitle;
  overline: Overline;
  body: Pagetitle;
  'body-bold': Pagetitle;
  label: Pagetitle;
  caption: Pagetitle;
}
interface Overline {
  fontFamily: string;
  fontWeight: number;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
  textCase: string;
}
interface Pagetitle {
  fontFamily: string;
  fontWeight: number;
  lineHeight: string;
  fontSize: string;
  letterSpacing: string;
}
interface FontSizes {
  '4xl': string;
  '3xl': string;
  '2xl': string;
  xl: string;
  lg: string;
  base: string;
  sm: string;
  xs: string;
}
interface FontWeights {
  normal: number;
  medium: number;
  bold: number;
  extrabold: number;
}
interface LetterSpacing {
  default: string;
  increased: string;
  decreased: string;
}
interface LineHeights {
  heading: string;
  body: string;
  single: string;
}
interface FontFamilies {
  heading: string;
  body: string;
}
interface Opacity {
  '0': string;
  '5': string;
  '10': string;
  '20': string;
  '25': string;
  '30': string;
  '40': string;
  '50': string;
  '60': string;
  '70': string;
  '75': string;
  '80': string;
  '95': string;
  '100': string;
}
interface BorderWidth {
  '0': string;
  '2': string;
  '4': string;
  '8': string;
  DEFAULT: string;
}
interface BorderRadius {
  none: string;
  sm: string;
  DEFAULT: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
}
interface Colors {
  tomato: Tomato;
  red: Tomato;
  crimson: Tomato;
  pink: Tomato;
  plum: Tomato;
  purple: Tomato;
  violet: Tomato;
  indigo: Tomato;
  blue: Tomato;
  cyan: Tomato;
  teal: Tomato;
  green: Tomato;
  grass: Tomato;
  brown: Tomato;
  orange: Tomato;
  sky: Tomato;
  mint: Tomato;
  lime: Tomato;
  yellow: Tomato;
  amber: Tomato;
  gold: Tomato;
  bronze: Tomato;
  gray: Tomato;
  mauve: Tomato;
  slate: Tomato;
  sage: Tomato;
  olive: Tomato;
  sand: Tomato;
  accent: Tomato;
}
interface Tomato {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
  '9': string;
  '10': string;
  '11': string;
  '12': string;
}