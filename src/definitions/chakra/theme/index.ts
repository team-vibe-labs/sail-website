import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";

import colors from "./foundations/colors";

import fontSizes from "./foundations/fontSizes";

/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */

const overrides = {
  ...styles,
  colors,
  fontSizes,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
};

const theme = extendTheme(overrides);

export default theme;
